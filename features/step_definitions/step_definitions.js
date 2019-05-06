const { Given, When, Then } = require('cucumber');
const got = require('got');
const assert = require('assert');

//// Your Step Definitions /////
Given(/^send GET request to "([^"]*)", dt should be "([^"]*)"$/, async function (url, name) {
    let res = await got.get(url);
    let json = JSON.parse(res.body);
    return assert.equal(json.list[0].dt, name);
});
