import fs from "fs";
import os from "os";

const report = `
💻 System Report
-------------------
Host Name: ${os.hostname()}
Platform: ${os.platform()}
OS Type: ${os.type()}
CPU Cores: ${os.cpus().length}
Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
User: ${os.userInfo().username}
Uptime: ${(os.uptime() / 60).toFixed(1)} minutes
Generated: ${new Date().toLocaleString()}
`;

fs.writeFile("SystemReport.txt", report, (err) => {
  if (err) throw err;
  console.log("✅ System Report Created Successfully!");
});