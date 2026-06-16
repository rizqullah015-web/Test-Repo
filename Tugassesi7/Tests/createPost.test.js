const chai = require('chai');
const expect = chai.expect;
const fetch = require('node-fetch');
const Ajv = require('ajv');

const ajv = new Ajv();

const createPostSchema = require('../schema/createPostSchema');

describe('POST API', () => {

    it('Success Create Post', async () => {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: 'QA Engineer',
                body: 'Automation Testing',
                userId: 1
            })
        });
        const data = await response.json();
        expect(response.status).to.equal(201);
        const valid = ajv.validate(createPostSchema, data);
        expect(valid).to.equal(true);
    });

});