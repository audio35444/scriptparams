#!/usr/bin/env node

module.exports.getStringParams = () => {
  let argv = process.argv.slice(2);
  if(!argv || argv == undefined || argv.length<=0)argv = process.title.replace(/[\s\S]*meliapi/,'').trim().split(" ")
  return argv.join(' ').replace(/--/g,'-');
};
