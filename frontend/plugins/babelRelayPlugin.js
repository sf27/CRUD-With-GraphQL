// var getbabelRelayPlugin = require('babel-relay-plugin');
// var schema = require('../schema/schema.json');
// console.log(getbabelRelayPlugin);
// module.exports = getbabelRelayPlugin(schema.data);

module.exports = require('babel-relay-plugin')(require('../schema/schema.json').data);