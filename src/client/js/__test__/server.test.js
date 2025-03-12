    const request = require('supertest');
    const app = require('../../../server/server');

    describe('Express Server Tests', () => {  
    test('should return the index.html file on GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.type).toBe('text/html');
    });
    });

