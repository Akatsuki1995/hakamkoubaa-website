const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "skills",
    description: "My Tech Skills",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "resume",
    description: "My Resume",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "blog",
    description: "Visit my blog",
  },

  {
    command: "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${project.name}</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,


  about: (write) => {
    const text = `<div>Hi, I'm Mohamed Hakam KOUBAA — a ${getAge("August 15, 1997")}-year-old Master's student in Cybersecurity & Cloud Computing at IPSSI, France.</div>

<div>🌍 <strong>Roots & Education:</strong> I grew up in Tunisia, where I developed a passion for technology and security, and earned my Engineering Degree in Computer Networks.</div>

<div>🔐 <strong>Blockchain & Security Foundation:</strong> My early work in blockchain introduced me to cryptography and distributed systems—knowledge I now apply to modern security challenges.</div>

<div>💼 <strong>From Business to Cyber Defense:</strong> Growing up in a family of entrepreneurs taught me resilience, adaptability, and leadership—skills I leverage in securing infrastructures.</div>

<div>💻 <strong>Technical Skills:</strong> Proficient in JavaScript, Python, and Solidity, with hands-on experience in secure development and system analysis.</div>

<div>🛡️ <strong>Blue Team Focus:</strong> Specializing in defensive security—system hardening, threat detection, vulnerability management, and incident response.</div>

<div>📚 <strong>Current Goals:</strong> Mastering SOC workflows, cybersecurity consulting, and cloud security to build robust defense strategies.</div>

<div>🔍 <strong>Seeking Opportunities:</strong> Actively looking for an apprenticeship in France (Blue Team, SOC, or security consulting roles). <br>Let’s connect!</div>

`.trim();

    return (async () => {
      for (const char of text) {
        write(char);
        // ~20 ms per character gives a smooth, human‐like typing feel
        await new Promise((res) => setTimeout(res, 10));
      }
    })();
  },
  education: (write) => {
    const text = `  
  <div>🎓 <strong>Engineering Degree in Networks & Telecommunications</strong></div>
  <div>I earned my engineering degree from a top institution in Tunisia, specializing in computer networks, telecommunication systems, and IT infrastructure.</div>
  <div>My training included advanced networking concepts, protocol analysis, and system administration, giving me a solid technical foundation.</div>

  <br/>

  <div>🎓 <strong>Master's in Cybersecurity & Cloud Computing</strong></div>
  <div>I’m currently pursuing a Master’s degree at <a href="https://ecole-ipssi.com" target="_blank">IPSSI, Paris</a>, focusing on cybersecurity operations and secure cloud architecture.</div>
  <div>This program emphasizes Blue Team skills, incident response, vulnerability management, and cloud service security across AWS and GCP environments.</div>
  <div>It also includes hands-on labs, capture-the-flag (CTF) challenges, and real-world threat detection workflows.</div>
`.trim();

    return (async () => {
      for (const char of text) {
        write(char);
        // ~20 ms per character gives a smooth, human‐like typing feel
        await new Promise((res) => setTimeout(res, 10));
      }
    })();
  },
  skills: (write) => {
    const text = `
<div class="skill"><b>SOC / Blue Team</b>: Splunk, Wazuh/Elastic SIEM, MITRE ATT&CK, Threat Hunting, Playbooks NIST/ANSSI, CrowdStrike/SentinelOne, CTFs (HackTheBox, TryHackMe), PKI, VPN</div>

<div class="skill"><b>Network & Forensics</b>: Wireshark, Suricata/Zeek, Autopsy/FTK, Forensic Analysis</div>

<div class="skill"><b>Cloud & SecOps</b>: AWS, Google Cloud Platform (GCP), Docker Security, ISO 27001/GDPR, CI/CD Pipelines (Infrastructure as Code)</div>

<div class="skill"><b>Automation & Development</b>: Python (IR, Malware), Bash/PowerShell, JavaScript, Git/CI-CD, Node.js/Express/Next.js</div>

<div class="skill"><b>Tools</b>: Linux, Postman, Git, Docker, Hardhat/Ganache (blockchain dev)</div>
  `.trim();

    return (async () => {
      for (const char of text) {
        write(char);
        // ~20 ms per character gives a smooth, human‐like typing feel
        await new Promise((res) => setTimeout(res, 10));
      }
    })();
  },

  projects: getProjects,

  contact: getContacts,

  resume: () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    window.open(`${baseURL}/Resume_HakamKoubaa.pdf`, "_blank");
    return "";
  },


  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,

  blog: () => {
    window.open("https://hackernoon.com/u/akatsuki1995", "_blank"); // Replace if needed
    return "";
  },


};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
}
