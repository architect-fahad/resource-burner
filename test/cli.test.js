const { test } = require('node:test');
const assert = require('node:assert');
const { exec } = require('node:child_process');
const path = require('node:path');

const binPath = path.resolve(__dirname, '../bin/burn.js');

test('CLI should run with default arguments', (t, done) => {
    // Run for 1 second to verify it starts and exits
    exec(`node "${binPath}" -t 1`, (error, stdout, stderr) => {
        assert.ifError(error);
        assert.match(stdout, /CPU cores:/);
        assert.match(stdout, /Memory \(MB\):/);
        assert.match(stdout, /Duration: 1s/);
        done();
    });
});

test('CLI should accept custom CPU and Memory', (t, done) => {
    exec(`node "${binPath}" -c 1 -m 64 -t 1`, (error, stdout, stderr) => {
        assert.ifError(error);
        assert.match(stdout, /CPU cores: 1/);
        assert.match(stdout, /Memory \(MB\): 64/);
        done();
    });
});

test('CLI should handle long flags', (t, done) => {
    exec(`node "${binPath}" --cpu 1 --memory 64 --time 1`, (error, stdout, stderr) => {
        assert.ifError(error);
        assert.match(stdout, /CPU cores: 1/);
        done();
    });
});
