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

atag[0].style.display = 'none';
var iframe = document.createElement('iframe');
iframe.src = 'http://localhost:8080/' + parts + '/' + size + '?'
  + encodeFormData(option);

switch(size) {
  case 'small':
    iframe.width = '360px';
    iframe.height = '100px';
    break;
  case 'middle':
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
