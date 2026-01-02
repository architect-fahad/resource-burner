const { stressCPU } = require('./cpu');
const { stressMemory } = require('./memory');

async function run({ cpu, memory, duration }) {
    const os = require('os');
    const cpuCores = cpu ?? os.cpus().length;
    const totalMB = Math.floor(os.totalmem() / (1024 * 1024));
    const memoryMB = memory ?? Math.floor(totalMB * 0.8); // Default: 80% of total RAM

    const cpuWorkers = stressCPU(cpuCores);
    const memoryBuffers = stressMemory(memoryMB);

    if (duration) await new Promise(res => setTimeout(res, duration));

    cpuWorkers.forEach(w => w.terminate());
    memoryBuffers.length = 0;
}

module.exports = { run };
