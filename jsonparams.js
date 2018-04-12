module.exports.getJsonParams = (str) => {
    let result = str.split('-').slice(1);
    let subresult = [],
    index = '',
    finishResult = {};
    result.map(element => {
      index = element.split(' ');
      finishResult[index[0]]=index.splice(1).join(' ');
    });
    return finishResult;
};
