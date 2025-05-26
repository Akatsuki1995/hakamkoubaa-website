import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method === "GET") {
    const projects = [
      // Cybersecurity Projects
      {
        name: "Python Malware Toolkit",
        description:
          "A Python-based malware framework for educational purposes. Includes modules for data exfiltration, process injection, and anti-analysis techniques.",
        stack: ["Python", "Socket", "cryptography"],
        link: "https://github.com/Akatsuki1995/Malware_Python",
        image: "malware_python.png",
      },
      {
        name: "PKI Infrastructure Setup",
        description:
          "Designed and implemented a full Public Key Infrastructure (PKI) using OpenSSL. Includes CA hierarchy, certificate issuance, revocation lists, and automated scripts.",
        stack: ["OpenSSL", "Bash", "Shell Scripting"],
        link: "https://github.com/Akatsuki1995/PKI_Infrastructure",
        image: "pki.png",
      },
      {
        name: "Private Blockchain Internship Project",
        description:
          "Developed a private blockchain solution for supply chain traceability during my final-year internship. Implemented consensus mechanism and smart contract modules.",
        stack: ["Go", "Docker", "Hyperledger Fabric"],
        link: "https://github.com/Akatsuki1995/Private-Blockchain-Internship",
        image: "private_blockchain.png",
      },
      // Blockchain Projects
      {
        name: "NFT Collection Management",
        description:
          "Created and managed multiple NFT collections on Ethereum. Handled on-chain minting, metadata storage, and marketplace integration.",
        stack: ["Solidity", "Hardhat", "IPFS", "JavaScript"],
        link: "https://github.com/Akatsuki1995/NFT-Collections",
        image: "nft_collection.png",
      },
      {
        name: "On-Chain / Off-Chain Data Oracle",
        description:
          "Built an oracle service that fetches real-world data off-chain and feeds it securely into smart contracts using Chainlink-compatible architecture.",
        stack: ["Node.js", "Chainlink", "Express", "Rust"],
        link: "https://github.com/Akatsuki1995/Data-Oracle",
        image: "data_oracle.png",
      },
      {
        name: "Decentralized Voting DApp",
        description:
          "A voting application with on-chain vote recording and off-chain identity verification. Ensures transparency and tamper resistance.",
        stack: ["React", "Solidity", "Web3.js", "IPFS"],
        link: "https://github.com/Akatsuki1995/Decentralized-Voting",
        image: "voting_dapp.png",
      },
      // Future Cybersecurity Projects
      {
        name: "Advanced Threat Detection System (Future)",
        description:
          "A machine-learning powered SIEM plugin for real-time threat detection using network traffic analysis and anomaly detection.",
        stack: ["Python", "TensorFlow", "Elasticsearch", "Kibana"],
        link: "",
        image: "future_threat_detection.png",
      },
      {
        name: "Red-Team Automation Framework (Future)",
        description:
          "An automation framework to orchestrate red-team engagements, including automated recon, exploitation, and reporting.",
        stack: ["Go", "Python", "Redis", "Docker"],
        link: "",
        image: "future_red_team.png",
      },
      {
        name: "Zero Trust Network Prototype (Future)",
        description:
          "Prototype for a zero trust network architecture with dynamic policy enforcement and continuous authentication.",
        stack: ["Kubernetes", "Istio", "OPA", "Terraform"],
        link: "",
        image: "future_zero_trust.png",
      },
    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET requests allowed" });
  }
}
