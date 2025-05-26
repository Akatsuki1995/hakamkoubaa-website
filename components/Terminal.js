"use client";

import { useRef, useState } from "react";
import { CONTENTS } from "../utils/commandHelper";
import Command from "./Command";
import styles from "./Terminal.module.css";

export default function Terminal() {
  const [commands, setCommands] = useState([]);
  const [loading, setLoading] = useState(false);
  const terminalRef = useRef(null);

  const escapeHTML = (str) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const addCommand = async (command) => {
    const handler = CONTENTS[command] ?? null;
    setLoading(true);
    // Push a placeholder entry
    setCommands((cmds) => [
      ...cmds,
      { command, output: handler ? "" : `sh: Unknown command: ${escapeHTML(command)}\nSee \`help\` for info` },
    ]);

    // If command is clear, just reset
    if (command === "clear") {
      setLoading(false);
      return setCommands([]);
    }

    // If no handler, we already set error output
    if (!handler) {
      setLoading(false);
      return scrollToBottom();
    }

    // Check if handler expects a write callback: fn.length > 0
    if (handler.length > 0) {
      // streaming/typing mode
      await handler(async (chunk) => {
        setCommands((cmds) => {
          const last = cmds[cmds.length - 1];
          return [
            ...cmds.slice(0, -1),
            { ...last, output: last.output + chunk },
          ];
        });
        scrollToBottom();
      });
    } else {
      // normal mode: returns a string or a Promise<string>
      const result = await handler();
      setCommands((cmds) => {
        const last = cmds[cmds.length - 1];
        return [
          ...cmds.slice(0, -1),
          { ...last, output: result },
        ];
      });
    }

    setLoading(false);
    scrollToBottom();
  };

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  return (
    <div className={styles.terminal} ref={terminalRef}>
      {commands.map(({ command, output }, index) => (
        <Command command={command} output={output} key={index} />
      ))}
      {!loading && <Command onSubmit={(cmd) => addCommand(cmd)} />}
    </div>
  );
}
