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

var setApi = function(parts) {
  switch(parts) {
    case 'bestsellers':
      return 'bestsell';
    case 'newrelease':
      return 'releases';
    case 'salesranking':
      return makeRandInt(1) > 5 ? 'discount' :  'salesrnk';
    default:
      return '';
  }
};

var setHeight = function(size) {
  switch(size) {
    case 'small':
      return '150px';
    case 'medium':
      return '200px';
    case 'large':
      return '300px';
    default:
      return '';
  }
};

var setWidth = function(size) {
  switch(size) {
    case 'small':
      return '540px';
    case 'medium':
      return '720px';
    case 'large':
      return '1080px';
    default:
      return '';
  }
};

var setSource = function(parts, size, query) {
  return 'http://localhost:8080/'
    + setApi(parts) + '/'
    + size + '?'
    + encodeFormData(query)
};

var setParts = function(className) {
  var atag  = document.getElementsByClassName(className);
  var parts = atag[0].dataset.parts;
  var size  = atag[0].dataset.size;
  var query = {};
  query['associ_tag']  = atag[0].dataset.associ_tag;
  query['node_id']     = atag[0].dataset.node_id;
  query['category']    = atag[0].dataset.category;
  query['rate']        = atag[0].dataset.rate;

  atag[0].style.display = 'none';
  var iframe = document.createElement('iframe');
  iframe.src = setSource(parts, size, query);
  iframe.width = setWidth(size);
  iframe.height = setHeight(size);
  iframe.scrolling = 'no';
  iframe.frameBorder = 0;
  iframe.marginWidth = 0;
  iframe.marginHeight = 0;
  iframe.id = className;

  atag[0].parentNode.insertBefore(iframe,atag[0]);
};

(function(){
  setParts('amazon-widget-bestsellers');
  setParts('amazon-widget-newrelease');
  setParts('amazon-widget-salesranking');
})();
