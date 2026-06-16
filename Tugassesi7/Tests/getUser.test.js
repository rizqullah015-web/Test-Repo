const chai = require('chai');
const expect = chai.expect;
const fetch = require('node-fetch');
const Ajv = require('ajv');

const ajv = new Ajv();

const getUserSchema = require('../schema/getUserSchema.js');

describe('GET USER API', () => {

    it('Success Get User', async () => {

        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        const data = await response.json();
        expect(response.status).to.equal(200);
        const valid = ajv.validate(getUserSchema, data);
        expect(valid).to.equal(true);
    });
});