const { Given, When, Then } = require('cucumber');
const got = require('got');
const assert = require('assert');
var fs = require('fs');

//// Your Step Definitions /////
Given(/^send GET request to "([^"]*)", dt should be "([^"]*)"$/, async function (url, name) {

  var parsedJSON = require(name);

    let res = await got.get(url);
    let json = JSON.parse(res.body);
    console.log(parsedJSON);
    return assert.deepEqual(json, parsedJSON);
});
