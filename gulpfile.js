var gulp = require('gulp');
var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: './reports/cucumber-json-report.json',
        output: './reports/cucumber-html-report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Local"
        }
    };

gulp.task('cucumberReports',function(){
    reporter.generate(options);
})

    //more info on `metadata` is available in `options` section below.

    //to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.
