// import _ from 'lodash';

function repeatStr(str, n){
  return _.repeat(str, n);
}

function toNumber(str){
  return _.toNumber(str);
}


var domUpdater = function () {
  var update = function (id, value) {
    console.debug("In in main.js");
    document.getElementById(id).innerHTML = value;
  }
  return {
    update: update,
    repeatStr: repeatStr
  };
}();