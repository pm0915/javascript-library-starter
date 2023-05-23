const { version } = require('../package.json');
const config = require('./config');
const sum = require('./sum');

const vrv = {};
vrv.sum = sum;
vrv.config = config;
vrv.version = version;

module.exports = vrv;
