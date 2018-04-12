#!/usr/bin/env node

const {getStringParams} = require('./stringparams.js');
const {getJsonParams} = require('./jsonparams.js');

const getFullParams = () =>  getJsonParams(getStringParams())

module.exports.getFullParams = getFullParams;
module.exports.getStringParams = getStringParams;
module.exports.getJsonParams = getJsonParams;

if (require.main === module) {
  let result = getStringParams();
  console.log('getStringParams',result);
  console.log('getJsonParams',getJsonParams(result));
}
