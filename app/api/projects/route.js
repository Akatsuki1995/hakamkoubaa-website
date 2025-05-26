export async function GET(request) {
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
        "Designed and implemented a full Public Key Infrastructure (PKI) using OpenSSL. Includes CA hierarchy, certificate issuance, revocation lists, and automation scripts.",
      stack: ["OpenSSL", "Bash", "Shell Scripting"],
      link: "https://github.com/Akatsuki1995/PKI_Infrastructure",
      image: "pki.png",
    },
    {
      name: "Private Blockchain Internship",
      description:
        "Final-year internship project building a private blockchain for supply chain traceability. Implemented consensus mechanisms, smart contract modules, and network deployment.",
      stack: ["Go", "Docker", "Hyperledger Fabric"],
      link: "https://github.com/Akatsuki1995/Private-Blockchain-Internship",
      image: "private_blockchain.png",
    },

    // Blockchain Projects
    {
      name: "NFT Collection Management",
      description:
        "Created and managed multiple NFT collections on Ethereum, handling on-chain minting, metadata storage on IPFS, and marketplace integration.",
      stack: ["Solidity", "Hardhat", "IPFS", "JavaScript"],
      link: "https://github.com/Akatsuki1995/NFT-Collections",
      image: "nft_collection.png",
    },
    {
      name: "On-Chain / Off-Chain Data Oracle",
      description:
        "Built a secure oracle service fetching real-world data off-chain and feeding it into smart contracts via a Chainlink-compatible architecture.",
      stack: ["Node.js", "Chainlink", "Express", "Rust"],
      link: "https://github.com/Akatsuki1995/Data-Oracle",
      image: "data_oracle.png",
    },
    {
      name: "Decentralized Voting DApp",
      description:
        "A voting application with on-chain vote recording and off-chain identity verification, ensuring transparency and tamper resistance.",
      stack: ["React", "Solidity", "Web3.js", "IPFS"],
      link: "https://github.com/Akatsuki1995/Decentralized-Voting",
      image: "voting_dapp.png",
    },

    // Future Blue Team & SIEM Projects
    {
      name: "Advanced SIEM Analytics Platform (Future)",
      description:
        "A next-generation SIEM analytics platform leveraging machine learning to detect anomalous patterns in event logs, streamline incident triage, and generate actionable alerts.",
      stack: ["Python", "Elasticsearch", "Kibana", "TensorFlow"],
      link: "",
      image: "future_siem.png",
    },
    {
      name: "Automated Log Aggregation Service (Future)",
      description:
        "A scalable service for collecting, normalizing, and correlating logs from diverse sources (endpoints, servers, cloud) to support real-time threat detection.",
      stack: ["Go", "Fluentd", "Kafka", "Elastic Stack"],
      link: "",
      image: "future_log_aggregation.png",
    },
    {
      name: "Threat Intelligence Dashboard (Future)",
      description:
        "An interactive dashboard aggregating threat intelligence feeds, visualizing attack trends, and providing SOC analysts with contextual enrichment for faster response.",
      stack: ["React", "Node.js", "MongoDB", "GraphQL"],
      link: "",
      image: "future_threat_dashboard.png",
    },
  ];

  return Response.json(projects, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
