const pathlib = require('path');
const createServer = require('../utils/create-server').default;
const Chromium = require('../../modules/browsers/chromium').default;

module.exports = function (config) {
    return {
        logLevel: 'info',
        testBailout: true,
        referenceScreenshotsDir: 'reference-screenshots',

        imageDiffOptions: {
            colorThreshold: 5,
            imageThreshold: 10,
            grayscaleThreshold: 5,
        },

        browsers: [
            new Chromium({
                width: 750,
                height: 550,
            }),
        ],

        suites: [
            {
                name: 'getUniqueSelector',
                appUrl: 'http://localhost:31667/test/self-tests/get-unique-selector/test.html',
                testFiles: ['get-unique-selector/test.js'],
                beforeTest: async function () {
                    this.server = await createServer({ dirToServe: pathlib.resolve(__dirname, '../../../'), port: 31667 });
                },
                afterTest: async function () {
                    return new Promise(resolve => this.server.close(resolve));
                },
            },
            {
                name: 'test-testapp',
                appUrl: 'http://localhost:31667/index.html',
                testFiles: ['./test-testapp.js'],
                beforeCommand: function (t, command) {
                    if (command.type !== 'assert') {
                        return t.waitWhileVisible('.loading, #toast');
                    }

                    return t.waitWhileVisible('.loading');
                },
                beforeTest: async function () {
                    this.server = await createServer({ dirToServe: pathlib.resolve(__dirname, '../../../test/self-tests/testapp'), port: 31667 });
                },
                afterTest: async function () {
                    return new Promise(resolve => this.server.close(resolve));
                },
            },
            {
                name: 'basic commands',
                appUrl: 'http://localhost:29336/basic-commands.html',
                testFiles: ['./basic-commands/basic-commands.test.js'],
                beforeCommand: function (t, command) {
                    if (command.type !== 'assert') {
                        return t.waitWhileVisible('.loading, #toast');
                    }

                    return t.waitWhileVisible('.loading');
                },
                beforeTest: async function () {
                    this.server = await createServer({ dirToServe: pathlib.resolve(__dirname, '../../../test/self-tests/basic-commands'), port: 29336 });
                },
                afterTest: async function () {
                    return new Promise(resolve => this.server.close(resolve));
                },
            },
        ],
    };
};
