/**
 * @description 检测数据类型
 * @param {!Object} obj
 * @return {?}
 */
export function _typeof(obj) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (obj) {
          return typeof obj;
        }
      : function (obj) {
          return obj &&
            "function" == typeof Symbol &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? "symbol"
            : typeof obj;
        })(obj);
}
/**
 * @description 检测是否是将class类作为函数调用
 * @param {!AudioNode} Constructor
 * @param {!Function} instance
 * @return {undefined}
 */
 export function _classCallCheck(Constructor, instance) {
  if (!(Constructor instanceof instance)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * @description 定义对象属性
 * @param {!Function} obj
 * @param {string} props
 * @return {undefined}
 */
export function _defineProperties(obj, props) {
  /** @type {number} */
  var i = 0;
  for (; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    /** @type {boolean} */
    descriptor.configurable = true;
    if ("value" in descriptor) {
      /** @type {boolean} */
      descriptor.writable = true;
    }
    Object.defineProperty(obj, descriptor.key, descriptor);
  }
}
/**
 * @param {!Function} f
 * @param {!Function} a
 * @param {!Function} n
 * @return {?}
 */
export function _createClass(f, a, n) {
  return (
    a && _defineProperties(f.prototype, a), n && _defineProperties(f, n), f
  );
}

/**
 * @description 根据时间戳，生成了一个唯一的id: 如: '17e096e95facc2'
 * @return {?}
 */
export function za() {
  /** @type {number} */
  var default_favicon = +new Date();
  /** @type {number} */
  var gasEstimates = 0;
  for (; default_favicon === +new Date(); ) {
    gasEstimates++;
  }
  return default_favicon.toString(16) + gasEstimates.toString(16);
}

/**
 * @description 匹配域名的正则
 * @return {?}
 */
export function Ya() {
  return new RegExp(
    /(.*?)\.?([^\.]*?)\.(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|net\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/
  );
}

/**
 * @description 
 * @param {string} value
 * @param {string} v
 * @return {?}
 */
export function $a(value, v) {
  var k = value.charAt(0);
  v = v.split(k);
  return k === value
    ? v
    : v[
        (value = parseInt(value.substring(1), 10)) < 0
          ? v.length + value
          : value - 1
      ];
}

/**
 * @description 
 * @param {string} string
 * @param {string} fn
 * @return {?}
 */
export  function _a(string, fn) {
  var propPair;
  var scriptQuery;
  var undefined = string.charAt(0);
  var row = fn.split("&");
  /** @type {!Array} */
  var arr = [];
  var obj = {};
  var i = string.substring(1);
  /** @type {number} */
  var j = 0;
  var m = row.length;
  for (; j < m; j++) {
    if (
      "" !==
      (arr = (arr = row[j].match(/(.*?)=(.*)/)) || [
        row[j],
        row[j],
        "",
      ])[1].replace(/\s/g, "")
    ) {
      if (
        ((arr[2] =
          ((scriptQuery = arr[2] || ""),
          _.decodeURIComponent(scriptQuery.replace(/\+/g, " ")))),
        i === arr[1])
      ) {
        return arr[2];
      }
      if ((propPair = arr[1].match(/(.*)\[([0-9]+)\]/))) {
        obj[propPair[1]] = obj[propPair[1]] || [];
        obj[propPair[1]][propPair[2]] = arr[2];
      } else {
        obj[arr[1]] = arr[2];
      }
    }
  }
  return undefined === string ? obj : obj[i];
}
