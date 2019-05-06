var {defineSupportCode} = require('cucumber');
var seleniumWebdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome')
var path = require('chromedriver').path;

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder().forBrowser('chrome').build();
}

defineSupportCode(function({setDefaultTimeout,setWorldConstructor}){
setWorldConstructor(CustomWorld);
setDefaultTimeout(60*1000);
});
