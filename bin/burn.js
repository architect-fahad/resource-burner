#!/usr/bin/env node
const os = require("os");
const path = require("path");
const { stressCPU } = require("../src/lib/cpu");
const { stressMemory } = require("../src/lib/memory");
// Custom argument parser
const args = {};
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '-c' || arg === '--cpu') {
        args.cpu = parseInt(argv[++i], 10);
    } else if (arg === '-m' || arg === '--memory') {
        args.memory = parseInt(argv[++i], 10);
    } else if (arg === '-t' || arg === '--time') {
        args.time = parseInt(argv[++i], 10);
    }
}

const cpuCores = args.cpu ?? os.cpus().length;
const totalMB = Math.floor(os.totalmem() / (1024 * 1024));
const memoryMB = args.memory ?? Math.floor(totalMB * 0.8); // Default: 80% of total RAM
const duration = args.time ? args.time * 1000 : null;

console.log('⚠️ WARNING: This tool stresses CPU and RAM. Use only on systems you control.');
console.log(`CPU cores: ${cpuCores}`);
console.log(`Memory (MB): ${memoryMB}`);
if (duration) console.log(`Duration: ${args.time}s`);

const cpuWorkers = stressCPU(cpuCores);
const memoryBuffers = stressMemory(memoryMB);

if (duration) {
    setTimeout(() => {
        console.log('\n✅ Done! Cleaning up...');
        cpuWorkers.forEach(w => w.terminate());
        memoryBuffers.length = 0;
        process.exit(0);
    }, duration);
}

process.on('SIGINT', () => {
    console.log('\n🛑 Terminated by user. Cleaning up...');
    cpuWorkers.forEach(w => w.terminate());
    memoryBuffers.length = 0;
    process.exit(0);
});