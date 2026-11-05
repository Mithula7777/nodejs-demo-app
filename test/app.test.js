const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../app');

test('Home page should return success message', async () => {
    const response = await request(app).get('/');
    assert.strictEqual(response.status, 200);
    assert.match(response.text, /CI\/CD Pipeline is Working/);
});

test('Health endpoint should return healthy status', async () => {
    const response = await request(app).get('/health');
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.body.status, 'healthy');
});
