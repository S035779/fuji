/**
 * Generated a randam characters, using 'Math.random()' method.
 * $length: number of characters to be generated.
 */
const makeRandInt = function(length) {
  const chars = '123456789';
  let str = '';
  for (let i = 0; i < length; ++i) {
    str += chars[ Math.floor( Math.random() * 9 ) ];
  }
  return parseInt(str, 10);
}

/**
 * encodeFormData
 *
 * @param {object} data 
 * @returns {string}
 */
var encodeFormData = function(data) {
  if (!data) return ""
  var pairs = [];
  for(var name in data) {
    if (!data.hasOwnProperty(name)) continue;
    if (typeof data[name] === "function") continue;
    var value = data[name].toString();
    name = encodeURIComponent(name.replace(" ", "+"));
    value = encodeURIComponent(value.replace(" ", "+"));
    pairs.push(name + "=" + value);
  }
  return pairs.join('&');
};

(function(){

'use strict';

// 目印のaタグからパラメータとってきたら消す
var atag  = document.getElementsByClassName('amazon-widget');
var parts = atag[0].dataset.parts;
var size  = atag[0].dataset.size;
var option = {};
option['associ_tag']  = atag[0].dataset.associ_tag;
option['node_id']     = atag[0].dataset.node_id;
option['category']    = atag[0].dataset.category;
option['rate']    = atag[0].dataset.rate;

var api='';
switch(parts) {
  case 'bestsellers':
    api='bestsell';
    break;
  case 'newrelease':
    api='releases';
    break;
  case 'salesranking':
    api = makeRandInt(1) > 5 ? 'discount' :  'salesrnk';
    break;
  default:
    break;
}

atag[0].style.display = 'none';
var iframe = document.createElement('iframe');
iframe.src = 'http://localhost:8080/' + api + '/' + size + '?'
  + encodeFormData(option);

switch(size) {
  case 'small':
    iframe.width = '540px';
    iframe.height = '150px';
    break;
  case 'medium':
    iframe.width = '720px';
    iframe.height = '200px';
    break;
  case 'large':
    iframe.width = '1080px';
    iframe.height = '300px';
    break;
}
iframe.scrolling = 'no';
iframe.frameBorder = 0;
iframe.marginWidth = 0;
iframe.marginHeight = 0;
iframe.id = 'amazon-widget';

// atagの隣にiframeを挿入
 atag[0].parentNode.insertBefore(iframe,atag[0]);

})();
