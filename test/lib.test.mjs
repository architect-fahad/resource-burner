import { test } from 'node:test';
import assert from 'node:assert';
import { run } from '../src/lib/index.mjs';

test('Library export should function correctly', async () => {
    // We run for a very short duration (100ms) just to ensure no crashes
    const start = Date.now();
    await run({ cpu: 1, memory: 50, duration: 100 });
    const end = Date.now();

    assert.ok(end - start >= 100, 'Should run for at least 100ms');
});
