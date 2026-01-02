function stressMemory(targetMB = 512) {
    const buffers = [];
    const chunkSizeMB = 50;
    let allocated = 0;

    while (allocated < targetMB) {
        buffers.push(Buffer.alloc(chunkSizeMB * 1024 * 1024));
        allocated += chunkSizeMB;
    }
    return buffers
}


module.exports = {
    stressMemory
}