const { Worker } = require("worker_threads");
const path = require("path");

const cores = require("os").cpus().length;

function stressCPU(cores) {
    const workers = [];
    for (let i = 0; i < cores; i++) {
        const worker = new Worker(path.resolve(__dirname, "cpu-worker.js"));
        workers.push(worker);
    }
    return workers;
}


module.exports = {
    stressCPU
}