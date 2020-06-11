let app = require('./server.js');
let testServer = require('supertest');

//Describe lets you group multiple tests together
//Checking the 200 status is like the first key thing to do 

describe('Test the logout path, should give 200 & remove user', () => {
    test('Responds with an OK 200 Status', async () => {
        const response = await testServer(app).post('/api/user/logout');
        expect(response.statusCode).toBe(200);
    })

    test('Should not be able to get user', async () => {
        const response = await testServer(app).get('/api/user/');
        expect(response.statusCode).toBe(403);
    })
})

describe('Test logging in a user and getting a user back', () => {

    const agent = testServer.agent(app);

    test('Responds with an OK 200 Status', async () => {
        let response = await agent.post('/api/user/login')
            .send({ username: 'ks', password: 'ks' });
        expect(response.statusCode).toBe(200);

        response = await agent.get('/api/user/');
        expect(response.statusCode).toBe(200);
    })
})