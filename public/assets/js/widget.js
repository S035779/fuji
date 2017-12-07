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
var atag = document.getElementsByClassName('amazon-widget');
var parts = atag[0].dataset.parts;
var option = {};
option['associ_tag']  = atag[0].dataset.associ_tag;
option['node_id']     = atag[0].dataset.node_id;
option['category']    = atag[0].dataset.category;
atag[0].style.display = 'none';
var iframe = document.createElement('iframe');
iframe.src = 'http://localhost:8080/'
  + parts + '?' + encodeFormData(option);
iframe.scrolling = 'no';
iframe.frameBorder = 0;
iframe.marginWidth = 0;
iframe.marginHeight = 0;
iframe.width = '1070px';
iframe.height = '300px';
iframe.id = 'amazon-widget';

// atagの隣にiframeを挿入
 atag[0].parentNode.insertBefore(iframe,atag[0]);

})();
