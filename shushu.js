'use strict';
!function(name, definition) {
  if ("object" == typeof exports && "undefined" != typeof module) {
    module.exports = definition();
  } else {
    if ("function" == typeof define && define.amd) {
      define(definition);
    } else {
      (name = name || self).thinkingdata = definition();
    }
  }
}(this, function() {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _typeof(obj) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    })(obj);
  }
  /**
   * @param {!AudioNode} Constructor
   * @param {!Function} instance
   * @return {undefined}
   */
  function _classCallCheck(Constructor, instance) {
    if (!(Constructor instanceof instance)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {!Function} obj
   * @param {string} props
   * @return {undefined}
   */
  function _defineProperties(obj, props) {
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
  function _createClass(f, a, n) {
    return a && _defineProperties(f.prototype, a), n && _defineProperties(f, n), f;
  }
  /**
   * @return {?}
   */
  function za() {
    /** @type {number} */
    var default_favicon = +new Date;
    /** @type {number} */
    var gasEstimates = 0;
    for (; default_favicon === +new Date;) {
      gasEstimates++;
    }
    return default_favicon.toString(16) + gasEstimates.toString(16);
  }
  /**
   * @return {?}
   */
  function Ya() {
    return new RegExp(/(.*?)\.?([^\.]*?)\.(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|net\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/);
  }
  /**
   * @param {string} value
   * @param {string} v
   * @return {?}
   */
  function $a(value, v) {
    var k = value.charAt(0);
    v = v.split(k);
    return k === value ? v : v[(value = parseInt(value.substring(1), 10)) < 0 ? v.length + value : value - 1];
  }
  /**
   * @param {string} string
   * @param {string} fn
   * @return {?}
   */
  function _a(string, fn) {
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
      if ("" !== (arr = (arr = row[j].match(/(.*?)=(.*)/)) || [row[j], row[j], ""])[1].replace(/\s/g, "")) {
        if (arr[2] = (scriptQuery = arr[2] || "", _.decodeURIComponent(scriptQuery.replace(/\+/g, " "))), i === arr[1]) {
          return arr[2];
        }
        if (propPair = arr[1].match(/(.*)\[([0-9]+)\]/)) {
          obj[propPair[1]] = obj[propPair[1]] || [];
          obj[propPair[1]][propPair[2]] = arr[2];
        } else {
          obj[arr[1]] = arr[2];
        }
      }
    }
    return undefined === string ? obj : obj[i];
  }
  /**
   * @return {?}
   */
  function initAsModule() {
    return tdMaster = new ThinkingDataAnalyticsLib;
  }
  if ("object" !== ("undefined" == typeof JSON ? "undefined" : _typeof(JSON))) {
    JSON = {};
  }
  (function() {
    /**
     * @param {number} n
     * @return {?}
     */
    function f(n) {
      return n < 10 ? "0" + n : n;
    }
    /**
     * @return {?}
     */
    function this_value() {
      return this.valueOf();
    }
    /**
     * @param {string} string
     * @return {?}
     */
    function quote(string) {
      return rx_escapable.lastIndex = 0, rx_escapable.test(string) ? '"' + string.replace(rx_escapable, function(t) {
        var type = meta[t];
        return "string" == typeof type ? type : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + string + '"';
    }
    /**
     * @param {string} key
     * @param {!Object} holder
     * @return {?}
     */
    function str(key, holder) {
      var i;
      var k;
      var v;
      var length;
      var partial;
      var mind = gap;
      var value = holder[key];
      switch(value && "object" === _typeof(value) && "function" == typeof value.toJSON && (value = value.toJSON(key)), _typeof(value = "function" == typeof rep ? rep.call(holder, key, value) : value)) {
        case "string":
          return quote(value);
        case "number":
          return isFinite(value) ? String(value) : "null";
        case "boolean":
        case "null":
          return String(value);
        case "object":
          if (!value) {
            return "null";
          }
          if (gap = gap + indent, partial = [], "[object Array]" === Object.prototype.toString.apply(value)) {
            length = value.length;
            /** @type {number} */
            i = 0;
            for (; i < length; i = i + 1) {
              partial[i] = str(i, value) || "null";
            }
            return v = 0 === partial.length ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]", gap = mind, v;
          }
          if (rep && "object" === _typeof(rep)) {
            length = rep.length;
            /** @type {number} */
            i = 0;
            for (; i < length; i = i + 1) {
              if ("string" == typeof rep[i] && (v = str(k = rep[i], value))) {
                partial.push(quote(k) + (gap ? ": " : ":") + v);
              }
            }
          } else {
            for (k in value) {
              if (Object.prototype.hasOwnProperty.call(value, k) && (v = str(k, value))) {
                partial.push(quote(k) + (gap ? ": " : ":") + v);
              }
            }
          }
          return v = 0 === partial.length ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}", gap = mind, v;
      }
    }
    /** @type {!RegExp} */
    var rx_one = /^[\],:{}\s]*$/;
    /** @type {!RegExp} */
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    /** @type {!RegExp} */
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    /** @type {!RegExp} */
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    /** @type {!RegExp} */
    var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    /** @type {!RegExp} */
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var gap;
    var indent;
    var meta;
    var rep;
    if ("function" != typeof Date.prototype.toJSON) {
      /**
       * @param {*=} p0
       * @return {string}
       */
      Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
      };
      /** @type {function(): ?} */
      Boolean.prototype.toJSON = this_value;
      /** @type {function(): ?} */
      Number.prototype.toJSON = this_value;
      /** @type {function(): ?} */
      String.prototype.toJSON = this_value;
    }
    if ("function" != typeof JSON.stringify) {
      meta = {
        "\b" : "\\b",
        "\t" : "\\t",
        "\n" : "\\n",
        "\f" : "\\f",
        "\r" : "\\r",
        '"' : '\\"',
        "\\" : "\\\\"
      };
      /**
       * @param {*} a
       * @param {(Array<string>|function(string, *): *|null)=} b
       * @param {(number|string)=} c
       * @return {string}
       */
      JSON.stringify = function(a, b, c) {
        var d;
        if (indent = gap = "", "number" == typeof c) {
          /** @type {number} */
          d = 0;
          for (; d < c; d = d + 1) {
            /** @type {string} */
            indent = indent + " ";
          }
        } else {
          if ("string" == typeof c) {
            /** @type {string} */
            indent = c;
          }
        }
        if ((rep = b) && "function" != typeof b && ("object" !== _typeof(b) || "number" != typeof b.length)) {
          throw new Error("JSON.stringify");
        }
        return str("", {
          "" : a
        });
      };
    }
    if ("function" != typeof JSON.parse) {
      /**
       * @param {string} text0
       * @param {function(string, *): *=} reviver
       * @return {*}
       */
      JSON.parse = function(text0, reviver) {
        /**
         * @param {!Object} holder
         * @param {string} key
         * @return {?}
         */
        function walk(holder, key) {
          var name;
          var result;
          var value = holder[key];
          if (value && "object" === _typeof(value)) {
            for (name in value) {
              if (Object.prototype.hasOwnProperty.call(value, name)) {
                if (void 0 !== (result = walk(value, name))) {
                  value[name] = result;
                } else {
                  delete value[name];
                }
              }
            }
          }
          return reviver.call(holder, key, value);
        }
        var j;
        if (text0 = String(text0), rx_dangerous.lastIndex = 0, rx_dangerous.test(text0) && (text0 = text0.replace(rx_dangerous, function(strUtf8) {
          return "\\u" + ("0000" + strUtf8.charCodeAt(0).toString(16)).slice(-4);
        })), rx_one.test(text0.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) {
          return j = eval("(" + text0 + ")"), "function" == typeof reviver ? walk({
            "" : j
          }, "") : j;
        }
        throw new SyntaxError("JSON.parse");
      };
    }
  })();

  var Config = {
    LIB_VERSION : "1.4.3"
  };
  /** @type {number} */
  var MAX_REFERRER_STRING_LENGTH = 200;
  var ArrayProto = Array.prototype;
  var ObjProto = Object.prototype;
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var slice = ArrayProto.slice;
  /** @type {function(this:*): string} */
  var toString = ObjProto.toString;
  /** @type {function(this:Object, *): boolean} */
  var hasOwnProperty = ObjProto.hasOwnProperty;
  /** @type {function(this:(IArrayLike<T>|string), (function(this:S, T, number, !Array<T>): ?|null), S=): undefined} */
  var nativeForEach = ArrayProto.forEach;
  var breaker = {};
  var _ = {};
  /**
   * @param {!Object} obj
   * @param {!Function} iterator
   * @param {?} context
   * @return {undefined}
   */
  _.each = function(obj, iterator, context) {
    if (null !== obj) {
      if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
      } else {
        if (obj.length === +obj.length) {
          /** @type {number} */
          var i = 0;
          var result = obj.length;
          for (; i < result; i++) {
            if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) {
              return;
            }
          }
        } else {
          var key;
          for (key in obj) {
            if (hasOwnProperty.call(obj, key) && iterator.call(context, obj[key], key, obj) === breaker) {
              return;
            }
          }
        }
      }
    }
  };
  /**
   * @param {?} l
   * @return {?}
   */
  _.extend = function(l) {
    return _.each(slice.call(arguments, 1), function(e) {
      var p;
      for (p in e) {
        if (void 0 !== e[p]) {
          l[p] = e[p];
        }
      }
    }), l;
  };
  /**
   * @param {!Date} d
   * @return {?}
   */
  _.formatDate = function(d) {
    /**
     * @param {number} value
     * @return {?}
     */
    function formatNumber(value) {
      return value < 10 ? "0" + value : value;
    }
    return d.getFullYear() + "-" + formatNumber(d.getMonth() + 1) + "-" + formatNumber(d.getDate()) + " " + formatNumber(d.getHours()) + ":" + formatNumber(d.getMinutes()) + ":" + formatNumber(d.getSeconds()) + "." + ((end = d.getMilliseconds()) < 10 ? "00" + end : end < 100 ? "0" + end : end);
    var end;
  };
  /**
   * @param {?} t
   * @return {?}
   */
  _.formatJsonString = function(t) {
    try {
      return JSON.stringify(t, null, 8);
    } catch (e) {
      return JSON.stringify(t);
    }
  };
  /**
   * @param {!Object} o
   * @return {undefined}
   */
  _.searchObjDate = function(o) {
    if (_.check.isObject(o) || _.check.isArray(o)) {
      _.each(o, function(value, field) {
        if (_.check.isObject(value) || _.check.isArray(value)) {
          _.searchObjDate(o[field]);
        } else {
          if (_.check.isDate(value)) {
            o[field] = _.formatDate(value);
          }
        }
      });
    }
  };
  _.check = {
    isUndefined : function(x) {
      return void 0 === x;
    },
    isObject : function(obj) {
      return "[object Object]" === toString.call(obj) && null !== obj;
    },
    isEmptyObject : function(obj) {
      if (_.check.isObject(obj)) {
        var prop;
        for (prop in obj) {
          if (hasOwnProperty.call(obj, prop)) {
            return false;
          }
        }
        return true;
      }
      return false;
    },
    isArray : function(obj) {
      return "[object Array]" === toString.call(obj);
    },
    isString : function(value) {
      return "[object String]" === toString.call(value);
    },
    isDate : function(value) {
      return "[object Date]" === toString.call(value);
    },
    isNumber : function(obj) {
      return "[object Number]" === toString.call(obj);
    },
    isBoolean : function(obj) {
      return "[object Boolean]" === toString.call(obj);
    },
    isJSONString : function(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }
  };
  /**
   * @return {?}
   */
  _.UUID = function() {
    /** @type {string} */
    var e = (e = String(screen.height * screen.width)) && /\d{5,}/.test(e) ? e.toString(16) : String(31242 * Math.random()).replace(".", "").slice(0, 8);
    /** @type {string} */
    e = za() + "-" + Math.random().toString(16).replace(".", "") + "-" + function() {
      /**
       * @param {number} p
       * @param {!Array} pattern
       * @return {?}
       */
      function fn(p, pattern) {
        /** @type {number} */
        var a = 0;
        /** @type {number} */
        var i = 0;
        for (; i < pattern.length; i++) {
          /** @type {number} */
          a = a | b[i] << 8 * i;
        }
        return p ^ a;
      }
      var j;
      var i;
      /** @type {string} */
      var a = navigator.userAgent;
      /** @type {!Array} */
      var b = [];
      /** @type {number} */
      var val = 0;
      /** @type {number} */
      j = 0;
      for (; j < a.length; j++) {
        /** @type {number} */
        i = a.charCodeAt(j);
        b.unshift(255 & i);
        if (4 <= b.length) {
          val = fn(val, b);
          /** @type {!Array} */
          b = [];
        }
      }
      return (val = 0 < b.length ? fn(val, b) : val).toString(16);
    }() + "-" + e + "-" + za();
    return e || (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15);
  };
  /**
   * @return {?}
   */
  _.UUIDv4 = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      /** @type {number} */
      var r = 16 * Math.random() | 0;
      return ("x" == c ? r : 3 & r | 8).toString(16);
    });
  };
  /**
   * @param {string} e
   * @return {?}
   */
  _.getReferrer = function(e) {
    e = e || document.referrer;
    return "string" != typeof e ? "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(e) : "string" == typeof(e = (e = 0 === e.indexOf("https://www.baidu.com/") ? e.split("?")[0] : e).slice(0, MAX_REFERRER_STRING_LENGTH)) ? e : "";
  };
  /**
   * @param {string} key
   * @param {string} val
   * @return {?}
   */
  _.url = function(key, val) {
    var config = {};
    if ("tld?" === key) {
      return Ya();
    }
    if (val = val || window.location.toString(), !key) {
      return val;
    }
    if (key = key.toString(), tmp = val.match(/^mailto:([^\/].+)/)) {
      /** @type {string} */
      config.protocol = "mailto";
      config.email = tmp[1];
    } else {
      if ((tmp = (val = (tmp = val.match(/(.*?)\/#!(.*)/)) ? tmp[1] + tmp[2] : val).match(/(.*?)#(.*)/)) && (config.hash = tmp[2], val = tmp[1]), config.hash && key.match(/^#/)) {
        return _a(key, config.hash);
      }
      if ((tmp = val.match(/(.*?)\?(.*)/)) && (config.query = tmp[2], val = tmp[1]), config.query && key.match(/^\?/)) {
        return _a(key, config.query);
      }
      if ((tmp = val.match(/(.*?):?\/\/(.*)/)) && (config.protocol = tmp[1].toLowerCase(), val = tmp[2]), (tmp = val.match(/(.*?)(\/.*)/)) && (config.path = tmp[2], val = tmp[1]), config.path = (config.path || "").replace(/^([^\/])/, "/$1").replace(/\/$/, ""), (key = key.match(/^[\-0-9]+$/) ? key.replace(/^([^\/])/, "/$1") : key).match(/^\//)) {
        return $a(key, config.path.substring(1));
      }
      if ((tmp = (tmp = $a("/-1", config.path.substring(1))) && tmp.match(/(.*?)\.(.*)/)) && (config.file = tmp[0], config.filename = tmp[1], config.fileext = tmp[2]), (tmp = val.match(/(.*):([0-9]+)$/)) && (config.port = tmp[2], val = tmp[1]), (tmp = val.match(/(.*?)@(.*)/)) && (config.auth = tmp[1], val = tmp[2]), config.auth && (tmp = config.auth.match(/(.*):(.*)/), config.user = tmp ? tmp[1] : config.auth, config.pass = tmp ? tmp[2] : void 0), config.hostname = val.toLowerCase(), "." === 
      key.charAt(0)) {
        return $a(key, config.hostname);
      }
      if (Ya() && (tmp = config.hostname.match(Ya()))) {
        config.tld = tmp[3];
        config.domain = tmp[2] ? tmp[2] + "." + tmp[3] : void 0;
        config.sub = tmp[1] || void 0;
      }
      /** @type {string} */
      var tmp = config.port ? ":" + config.port : "";
      config.protocol = config.protocol || window.location.protocol.replace(":", "");
      config.port = config.port || ("https" === config.protocol ? "443" : "80");
      config.protocol = config.protocol || ("443" === config.port ? "https" : "http");
      /** @type {string} */
      config.basic = config.protocol + "://" + config.hostname + tmp;
    }
    return key in config ? config[key] : "{}" === key ? config : "";
  };
  /**
   * @param {string} val
   * @return {?}
   */
  _.hashCode = function(val) {
    if ("string" != typeof val) {
      return 0;
    }
    /** @type {number} */
    var hash = 0;
    if (0 === val.length) {
      return hash;
    }
    /** @type {number} */
    var i = 0;
    for (; i < val.length; i++) {
      /** @type {number} */
      hash = (hash << 5) - hash + val.charCodeAt(i);
      /** @type {number} */
      hash = hash & hash;
    }
    return hash;
  };
  /**
   * @param {string} s
   * @return {?}
   */
  _.decodeURIComponent = function(s) {
    /** @type {string} */
    var result = "";
    try {
      /** @type {string} */
      result = decodeURIComponent(s);
    } catch (e) {
      /** @type {string} */
      result = s;
    }
    return result;
  };
  /**
   * @param {string} value
   * @return {?}
   */
  _.encodeURIComponent = function(value) {
    /** @type {string} */
    var v = "";
    try {
      /** @type {string} */
      v = encodeURIComponent(value);
    } catch (e) {
      /** @type {string} */
      v = value;
    }
    return v;
  };
  /**
   * @param {string} str
   * @return {?}
   */
  _.utf8Encode = function(str) {
    var l;
    /** @type {string} */
    var s = "";
    /** @type {number} */
    var i = l = 0;
    /** @type {number} */
    var mxk = (str = (str + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length;
    /** @type {number} */
    var k = 0;
    for (; k < mxk; k++) {
      /** @type {number} */
      var p = str.charCodeAt(k);
      /** @type {null} */
      var cmark = null;
      if (p < 128) {
        l++;
      } else {
        /** @type {string} */
        cmark = 127 < p && p < 2048 ? String.fromCharCode(p >> 6 | 192, 63 & p | 128) : String.fromCharCode(p >> 12 | 224, p >> 6 & 63 | 128, 63 & p | 128);
      }
      if (null !== cmark) {
        if (i < l) {
          /** @type {string} */
          s = s + str.substring(i, l);
        }
        /** @type {string} */
        s = s + cmark;
        /** @type {number} */
        i = l = k + 1;
      }
    }
    return i < l && (s = s + str.substring(i, str.length)), s;
  };
  /**
   * @param {string} data
   * @return {?}
   */
  _.base64Encode = function(data) {
    var o;
    var r;
    var digit;
    var VLQ_BASE_MASK;
    /** @type {string} */
    var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var n = 0;
    /** @type {string} */
    var enc = "";
    /** @type {!Array} */
    var CSSTxt = [];
    if (!data) {
      return data;
    }
    data = _.utf8Encode(data);
    for (; o = (VLQ_BASE_MASK = data.charCodeAt(i++) << 16 | data.charCodeAt(i++) << 8 | data.charCodeAt(i++)) >> 12 & 63, r = VLQ_BASE_MASK >> 6 & 63, digit = 63 & VLQ_BASE_MASK, CSSTxt[n++] = s.charAt(VLQ_BASE_MASK >> 18 & 63) + s.charAt(o) + s.charAt(r) + s.charAt(digit), i < data.length;) {
    }
    switch(enc = CSSTxt.join(""), data.length % 3) {
      case 1:
        /** @type {string} */
        enc = enc.slice(0, -2) + "==";
        break;
      case 2:
        /** @type {string} */
        enc = enc.slice(0, -1) + "=";
    }
    return enc;
  };
  _.cookie = {
    get : function(o) {
      /** @type {string} */
      var id = o + "=";
      /** @type {!Array<string>} */
      var handlersIndex = document.cookie.split(";");
      /** @type {number} */
      var j = 0;
      for (; j < handlersIndex.length; j++) {
        /** @type {string} */
        var i = handlersIndex[j];
        for (; " " === i.charAt(0);) {
          /** @type {string} */
          i = i.substring(1, i.length);
        }
        if (0 === i.indexOf(id)) {
          return _.decodeURIComponent(i.substring(id.length, i.length));
        }
      }
      return null;
    },
    set : function(n, v, id, height, scaleX) {
      var d;
      /** @type {string} */
      var prefix = "";
      /** @type {string} */
      var th_field = "";
      /** @type {string} */
      var str = "";
      id = null === id ? 73E3 : id;
      if (height) {
        /** @type {string} */
        prefix = (d = _.url("domain", location.href)) ? "; domain=." + d : "";
      }
      if (id) {
        /** @type {!Date} */
        d = new Date;
        if ("s" === String(id).slice(-1)) {
          d.setTime(d.getTime() + 1E3 * Number(String(id).slice(0, -1)));
        } else {
          d.setTime(d.getTime() + 24 * id * 60 * 60 * 1E3);
        }
        /** @type {string} */
        th_field = "; expires=" + d.toGMTString();
      }
      if (scaleX) {
        /** @type {string} */
        str = "; secure";
      }
      /** @type {string} */
      str = n + "=" + encodeURIComponent(v) + th_field + "; path=/" + prefix + str;
      return document.cookie = str;
    },
    remove : function(e, original) {
      _.cookie.set(e, "", -1, original);
    }
  };
  _.localStorage = {
    get : function(o) {
      try {
        return window.localStorage.getItem(o);
      } catch (e) {
        _.localStorage.error(e);
      }
    },
    parse : function(config) {
      var subselects;
      try {
        /** @type {*} */
        subselects = JSON.parse(_.localStorage.get(config)) || null;
      } catch (e) {
        _.localStorage.error(e);
      }
      return subselects;
    },
    set : function(el, t) {
      try {
        window.localStorage.setItem(el, t);
      } catch (e) {
        _.localStorage.error(e);
      }
    },
    remove : function(o) {
      try {
        window.localStorage.removeItem(o);
      } catch (e) {
        _.localStorage.error(e);
      }
    },
    error : function(fn) {
      console.error("localStorage error: " + fn);
    },
    isSupported : function() {
      /** @type {boolean} */
      var n = true;
      try {
        /** @type {string} */
        var e = "__thinkingdatasupport__";
        /** @type {string} */
        var i = "testIsSupportStorage";
        _.localStorage.set(e, i);
        if (_.localStorage.get(e) !== i) {
          /** @type {boolean} */
          n = false;
        }
        _.localStorage.remove(e);
      } catch (e) {
        /** @type {boolean} */
        n = false;
      }
      return n;
    }
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  _.stripEmptyProperties = function(value) {
    var result = {};
    return _.each(value, function(e, hashId) {
      if (_.check.isString(e) && 0 < e.length) {
        /** @type {!Object} */
        result[hashId] = e;
      }
    }), result;
  };
  _.info = {
    os : function() {
      /** @type {string} */
      var agent = navigator.userAgent;
      return /Windows/i.test(agent) ? /Phone/.test(agent) || /WPDesktop/.test(agent) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(agent) ? "iOS" : /Android/.test(agent) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(agent) ? "BlackBerry" : /Mac/i.test(agent) ? "Mac OS X" : /Linux/.test(agent) ? "Linux" : /CrOS/.test(agent) ? "Chrome OS" : "";
    },
    browser : function() {
      var browser = {
        type : "",
        version : ""
      };
      try {
        var value;
        var version;
        /** @type {string} */
        var name = navigator.userAgent.toLowerCase();
        /** @type {!Array} */
        var r = [];
        if (null !== name.match(/baidubrowser/)) {
          /** @type {string} */
          browser.type = "baidu";
          r.push(/baidubrowser\/([\d.]+)/);
        } else {
          if (null !== name.match(/bidubrowser/)) {
            /** @type {string} */
            browser.type = "baidu";
            r.push(/bidubrowser\/([\d.]+)/);
          } else {
            if (null !== name.match(/edga/)) {
              /** @type {string} */
              browser.type = "edge";
              r.push(/edga\/([\d.]+)/);
            } else {
              if (null !== name.match(/edgios/)) {
                /** @type {string} */
                browser.type = "edge";
                r.push(/edgios\/([\d.]+)/);
              } else {
                if (null !== name.match(/liebaofast/)) {
                  /** @type {string} */
                  browser.type = "liebao";
                  r.push(/liebaofast\/([\d.]+)/);
                } else {
                  if (null !== name.match(/sogoumobilebrowser/)) {
                    /** @type {string} */
                    browser.type = "sogou";
                    r.push(/sogoumobilebrowser\/([\d.]+)/);
                  } else {
                    if (null !== name.match(/lbbrowser/)) {
                      /** @type {string} */
                      browser.type = "liebao";
                      r.push(/lbbrowser\/([\d.]+)/);
                    } else {
                      if (null !== name.match(/crios/)) {
                        /** @type {string} */
                        browser.type = "chrome";
                        r.push(/crios\/([\d.]+)/);
                      } else {
                        if (null !== name.match(/qihoobrowser/)) {
                          /** @type {string} */
                          browser.type = "360";
                          r.push(/qihoobrowser\/([\d.]+)/);
                        } else {
                          if (null !== name.match(/mxios/)) {
                            /** @type {string} */
                            browser.type = "maxthon";
                            r.push(/mxios\/([\d.]+)/);
                          } else {
                            if (null !== name.match(/fxios/)) {
                              /** @type {string} */
                              browser.type = "firefox";
                              r.push(/fxios\/([\d.\w]+)/);
                            } else {
                              if (null !== name.match(/edge/)) {
                                /** @type {string} */
                                browser.type = "edge";
                                r.push(/edge\/([\d.]+)/);
                              } else {
                                if (null !== name.match(/metasr/)) {
                                  /** @type {string} */
                                  browser.type = "sogou";
                                  r.push(/metasr ([\d.]+)/);
                                } else {
                                  if (null !== name.match(/micromessenger/)) {
                                    /** @type {string} */
                                    browser.type = "micromessenger";
                                    r.push(/micromessenger\/([\d.]+)/);
                                  } else {
                                    if (null !== name.match(/mqqbrowser/)) {
                                      /** @type {string} */
                                      browser.type = "qq";
                                      r.push(/mqqbrowser\/([\d.]+)/);
                                    } else {
                                      if (null !== name.match(/qqbrowserlite/)) {
                                        /** @type {string} */
                                        browser.type = "qq";
                                        r.push(/qqbrowserlite\/([\d.]+)/);
                                      } else {
                                        if (null !== name.match(/tencenttraveler/)) {
                                          /** @type {string} */
                                          browser.type = "qq";
                                          r.push(/tencenttraveler\/([\d.]+)/);
                                        } else {
                                          if (null !== name.match(/qqbrowser/)) {
                                            /** @type {string} */
                                            browser.type = "qq";
                                            r.push(/qqbrowser\/([\d.]+)/);
                                          } else {
                                            if (null !== name.match(/maxthon/)) {
                                              /** @type {string} */
                                              browser.type = "maxthon";
                                              r.push(/maxthon\/([\d.]+)/);
                                            } else {
                                              if (null !== name.match(/ubrowser/)) {
                                                /** @type {string} */
                                                browser.type = "uc";
                                                r.push(/ubrowser\/([\d.]+)/);
                                              } else {
                                                if (null !== name.match(/ucbrowser/)) {
                                                  /** @type {string} */
                                                  browser.type = "uc";
                                                  r.push(/ucbrowser\/([\d.]+)/);
                                                } else {
                                                  if (null !== name.match(/firefox/)) {
                                                    /** @type {string} */
                                                    browser.type = "firefox";
                                                    r.push(/firefox\/([\d.]+)/);
                                                  } else {
                                                    if (null !== name.match(/opera/)) {
                                                      /** @type {string} */
                                                      browser.type = "opera";
                                                      r.push(/opera\/([\d.]+)/);
                                                    } else {
                                                      if (null !== name.match(/opr/)) {
                                                        /** @type {string} */
                                                        browser.type = "opera";
                                                        r.push(/opr\/([\d.]+)/);
                                                      } else {
                                                        if (null !== name.match(/chrome/)) {
                                                          /** @type {string} */
                                                          browser.type = "chrome";
                                                          r.push(/chrome\/([\d.]+)/);
                                                        } else {
                                                          if (null !== name.match(/safari/)) {
                                                            /** @type {string} */
                                                            browser.type = "safari";
                                                            r.push(/version\/([\d.]+)/);
                                                          } else {
                                                            if (!(null === name.match(/trident/) && null === name.match(/msie/))) {
                                                              /** @type {string} */
                                                              browser.type = "ie";
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if ("ie" === browser.type) {
          /** @type {string} */
          value = name.match(/trident\/([\d.]+)/) ? name.match(/trident\/([\d.]+)/)[1] : "";
          /** @type {string} */
          version = name.match(/msie ([\d.]+)/) ? name.match(/msie ([\d.]+)/)[1] : "";
          if ("" !== value) {
            /** @type {string} */
            browser.version = String(parseInt(value) + 4);
          } else {
            if ("" !== version) {
              /** @type {string} */
              browser.version = version;
            }
          }
        } else {
          if (r) {
            /** @type {string} */
            browser.version = name.match(r[0]) ? name.match(r[0])[1] : "";
          }
        }
      } catch (error) {
        Log.w("getting browser info failed due to ", error);
      }
      return browser;
    },
    properties : function() {
      var browser = _.info.browser();
      return _.extend({
        "#os" : _.info.os(),
        "#lib_version" : Config.LIB_VERSION,
        "#lib" : "js",
        "#screen_height" : screen.height,
        "#screen_width" : screen.width,
        "#browser" : browser.type,
        "#browser_version" : browser.version
      });
    },
    pageProperties : function() {
      var data = _.getReferrer();
      return _.stripEmptyProperties({
        "#referrer" : data,
        "#referrer_host" : data && _.url("hostname", data),
        "#url" : location.href,
        "#url_path" : location.pathname,
        "#title" : document.title
      });
    }
  };
  var Log = function() {
    /**
     * @return {undefined}
     */
    function e() {
      _classCallCheck(this, e);
    }
    return _createClass(e, null, [{
      key : "i",
      value : function() {
        if (!this.showLog) {
          return false;
        }
        if (true !== this.showLog && "string" !== this.showLog || (arguments[0] = _.formatJsonString(arguments[0])), "object" === ("undefined" == typeof console ? "undefined" : _typeof(console)) && console.log) {
          try {
            return console.log.apply(console, arguments);
          } catch (e) {
            console.log(arguments[0]);
          }
        }
      }
    }, {
      key : "w",
      value : function() {
        if (!this.showLog) {
          return false;
        }
        if (true !== this.showLog && "string" !== this.showLog || (arguments[0] = _.formatJsonString(arguments[0])), "object" === ("undefined" == typeof console ? "undefined" : _typeof(console)) && console.warn) {
          try {
            return console.warn.apply(console, arguments);
          } catch (e) {
            console.warn(arguments[0]);
          }
        }
      }
    }]), e;
  }();
  /** @type {!RegExp} */
  var KEY_NAME_MATCH_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{0,49}$/;
  var PropertyChecker = function() {
    /**
     * @return {undefined}
     */
    function e() {
      _classCallCheck(this, e);
    }
    return _createClass(e, null, [{
      key : "stripProperties",
      value : function(e) {
        return _.check.isObject(e) && _.each(e, function(value, error) {
          if (!(_.check.isString(value) || _.check.isNumber(value) || _.check.isDate(value) || _.check.isBoolean(value) || _.check.isArray(value) || _.check.isObject(value))) {
            Log.w("\u60a8\u7684\u6570\u636e-", error, value, "-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u53ef\u80fd\u65e0\u6cd5\u6b63\u786e\u5165\u5e93. \u5c5e\u6027\u503c\u53ea\u652f\u6301 String, Number, Date, Boolean, Array\uff0cObject");
          }
        }), e;
      }
    }, {
      key : "_checkPropertiesKey",
      value : function(a) {
        /** @type {boolean} */
        var x = true;
        return _.each(a, function(canCreateDiscussions, message) {
          if (!KEY_NAME_MATCH_REGEX.test(message)) {
            Log.w("\u4e0d\u5408\u6cd5\u7684 KEY \u503c: " + message);
            /** @type {boolean} */
            x = false;
          }
        }), x;
      }
    }, {
      key : "event",
      value : function(message) {
        return !(!_.check.isString(message) || !KEY_NAME_MATCH_REGEX.test(message)) || (Log.w("\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f, eventName \u5fc5\u987b\u662f\u82f1\u6587\u5b57\u6bcd\u6216\u8005 '_' \u5f00\u5934, \u5305\u542b\u5b57\u6bcd\u548c\u6570\u5b57\u7684\u4e0d\u8d85\u8fc750\u4e2a\u5b57\u7b26\u7684\u5b57\u7b26\u4e32: " + message), false);
      }
    }, {
      key : "propertyName",
      value : function(message) {
        return !(!_.check.isString(message) || !KEY_NAME_MATCH_REGEX.test(message)) || (Log.w("\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f, propertyName \u5fc5\u987b\u662f\u82f1\u6587\u5b57\u6bcd\u6216\u8005 '_' \u5f00\u5934, \u5305\u542b\u5b57\u6bcd\u548c\u6570\u5b57\u7684\u4e0d\u8d85\u8fc750\u4e2a\u5b57\u7b26\u7684\u5b57\u7b26\u4e32: " + message), false);
      }
    }, {
      key : "properties",
      value : function(e) {
        return this.stripProperties(e), !e || (_.check.isObject(e) ? !!this._checkPropertiesKey(e) || (Log.w("\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f, properties \u7684 key \u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934\uff0c\u5305\u542b\u6570\u5b57\u3001\u5b57\u6bcd\u548c\u4e0b\u5212\u7ebf _\uff0c\u957f\u5ea6\u6700\u5927\u4e3a50\u4e2a\u5b57\u7b26"), false) : (Log.w("properties \u53ef\u4ee5\u6ca1\u6709\uff0c\u4f46\u6709\u7684\u8bdd\u5fc5\u987b\u662f\u5bf9\u8c61"), false));
      }
    }, {
      key : "propertiesMust",
      value : function(e) {
        return this.stripProperties(e), void 0 === e || !_.check.isObject(e) || _.check.isEmptyObject(e) ? (Log.w("properties\u5fc5\u987b\u662f\u5bf9\u8c61\u4e14\u6709\u503c"), false) : !!this._checkPropertiesKey(e) || (Log.w("\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f, properties \u7684 key \u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934\uff0c\u5305\u542b\u6570\u5b57\u3001\u5b57\u6bcd\u548c\u4e0b\u5212\u7ebf _\uff0c\u957f\u5ea6\u6700\u5927\u4e3a50\u4e2a\u5b57\u7b26"), 
        false);
      }
    }, {
      key : "userId",
      value : function(e) {
        return !(!_.check.isString(e) || !/^.{1,63}$/.test(e)) || (Log.w("\u7528\u6237 id \u5fc5\u987b\u662f\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u4e14\u5c0f\u4e8e 64 \u4f4d\u7684\u5b57\u7b26\u4e32"), false);
      }
    }]), e;
  }();
  /** @type {string} */
  var MASTER_INSTANCE_NAME = "thinkingdata";
  var DEFAULT_CONFIG = {
    _name : MASTER_INSTANCE_NAME,
    appId : "",
    send_method : "image",
    persistence : "localStorage",
    persistencePrefix : "ThinkingDataJSSDK",
    persistenceEnabled : true,
    crossSubDomain : true,
    maxReferrerStringLength : 200,
    showLog : true,
    dataSendTimeout : 3E3,
    useAppTrack : false,
    strict : false
  };
  /**
   * @param {string} data
   * @return {undefined}
   */
  var ThinkingDataPersistence = function(data) {
    this._state = {};
    this.crossSubDomain = data.crossSubDomain;
    this.enabled = data.persistenceEnabled;
    var path;
    /** @type {null} */
    var url = null;
    if (this.enabled) {
      if (false === data.crossSubDomain) {
        path = _.url("sub", location.href);
        /** @type {string} */
        this.name = "string" == typeof path && "" !== path ? data.persistencePrefix + "_" + path : data.persistencePrefix + "_root";
      } else {
        /** @type {string} */
        this.name = data.persistencePrefix + "_cross";
      }
      if ("cookie" !== (path = data.persistence) && "localStorage" !== path) {
        Log.i("Unknown persistence type " + path + "; falling back to cookie");
        /** @type {string} */
        path = data.persistence = "cookie";
      }
      if ("localStorage" === path && _.localStorage.isSupported()) {
        this.storage = _.localStorage;
        if (url = _.cookie.get(this.name)) {
          _.cookie.remove(this.name, this.crossSubDomain);
        }
      } else {
        Log.i("localStorage is not support by the browser; falling back to cookie");
        this.storage = _.cookie;
      }
    }
    this._load(url);
    if (!this.getDistinctId()) {
      data = data.uuid || _.UUID();
      this._setDeviceId(data);
      this.setDistinctId(data);
    }
  };
  /**
   * @param {!Object} text
   * @return {undefined}
   */
  ThinkingDataPersistence.prototype._load = function(text) {
    var message;
    if (this.enabled) {
      if (null !== (message = null !== text ? text : this.storage.get(this.name)) && _.check.isJSONString(message)) {
        this._state = _.extend({}, JSON.parse(message));
      }
      if (null !== text) {
        this._save();
      }
    }
  };
  /**
   * @return {?}
   */
  ThinkingDataPersistence.prototype.getDistinctId = function() {
    return this._state.distinct_id;
  };
  /**
   * @param {string} callback
   * @return {undefined}
   */
  ThinkingDataPersistence.prototype.setDistinctId = function(callback) {
    this._set("distinct_id", callback);
  };
  /**
   * @param {string} newVal
   * @return {undefined}
   */
  ThinkingDataPersistence.prototype.setEnableTracking = function(newVal) {
    this._set("enable_tracking", newVal);
  };
  /**
   * @return {?}
   */
  ThinkingDataPersistence.prototype.getEnableTracking = function() {
    return !!_.check.isUndefined(this._state.enable_tracking) || this._state.enable_tracking;
  };
  /**
   * @return {undefined}
   */
  ThinkingDataPersistence.prototype.clear = function() {
    this._state = {};
    this._save();
  };
  /**
   * @param {string} stateful
   * @return {undefined}
   */
  ThinkingDataPersistence.prototype.setOptTracking = function(stateful) {
    this._set("opt_tracking", stateful);
  };
  /**
   * @return {?}
   */
  ThinkingDataPersistence.prototype.getOptTracking = function() {
    return !!_.check.isUndefined(this._state.opt_tracking) || this._state.opt_tracking;
  };
  /**
   * @param {string} callback
   * @return {undefined}
   */
  ThinkingDataPersistence.prototype.setDistinctId = function(callback) {
    this._set("distinct_id", callback);
  };
  /**
   * @return {?}
   */
  ThinkingDataPersistence.prototype.getAccountId = function() {
    return this._state.account_id;
  };
  /**
   * @param {string} href
   * @return {undefined}
   */
  ThinkingDataPersistence.prototype.setAccountId = function(href) {
    this._set("account_id", href);
  };
  /**
   * @return {?}
   */
  ThinkingDataPersistence.prototype.getDeviceId = function() {
    return this._state.device_id;
  };
  /**
   * @param {string} v
   * @return {undefined}
   */
  ThinkingDataPersistence.prototype.setSuperProperties = function(v) {
    this._set("super_properties", v);
  };
  /**
   * @return {?}
   */
  ThinkingDataPersistence.prototype.getSuperProperties = function() {
    return this._state.super_properties || {};
  };
  /**
   * @param {!Array} t
   * @param {number} f
   * @return {undefined}
   */
  ThinkingDataPersistence.prototype.setEventTimer = function(t, f) {
    var v = this._state.event_timers || {};
    /** @type {number} */
    v[t] = f;
    this._set("event_timers", v);
  };
  /**
   * @return {undefined}
   */
  ThinkingDataPersistence.prototype.clearEventTimer = function() {
    this._set("event_timers", {});
  };
  /**
   * @param {?} i
   * @return {?}
   */
  ThinkingDataPersistence.prototype.removeEventTimer = function(i) {
    var t = (this._state.event_timers || {})[i];
    return _.check.isUndefined(t) || (delete this._state.event_timers[i], this._save()), t;
  };
  /**
   * @param {string} data
   * @return {undefined}
   */
  ThinkingDataPersistence.prototype._setDeviceId = function(data) {
    if (this._state.device_id) {
      Log.w("Current device_id is ", this.getDeviceId(), ", it couldn't been set to: ", data);
    } else {
      this._set("device_id", data);
    }
  };
  /**
   * @return {undefined}
   */
  ThinkingDataPersistence.prototype._save = function() {
    if (this.enabled) {
      this.storage.set(this.name, JSON.stringify(this._state), 73E3, this.crossSubDomain);
    }
  };
  /**
   * @param {string} name
   * @param {string} value
   * @return {undefined}
   */
  ThinkingDataPersistence.prototype._set = function(name, value) {
    this._state = this._state || {};
    /** @type {string} */
    this._state[name] = value;
    this._save();
  };
  
  /**
   * @return {undefined}
   */
  var ThinkingDataAnalyticsLib = function() {
  };
  var tdMaster;
  /**
   * @param {!Object} selector
   * @param {string} event
   * @param {?} obj
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.trackLink = function(selector, event, obj) {
    var to;
    var o;
    var lang = this;
    if (this._isCollectData()) {
      to = this._getConfig("strict");
      if (PropertyChecker.properties(obj) || !to) {
        if (selector && _.check.isObject(selector)) {
          /** @type {!Array} */
          o = [];
          _.each(selector, function(fn, name) {
            if (fn && _.check.isArray(fn)) {
              _.each(fn, function(n) {
                switch(name) {
                  case "tag":
                    _.each(document.getElementsByTagName(n), function(e) {
                      if (o.indexOf(e) < 0) {
                        o.push(e);
                      }
                    });
                    break;
                  case "class":
                    _.each(document.getElementsByClassName(n), function(e) {
                      if (o.indexOf(e) < 0) {
                        o.push(e);
                      }
                    });
                    break;
                  case "id":
                    /** @type {(Element|null)} */
                    var id = document.getElementById(n);
                    if (null !== id && o.indexOf(id) < 0) {
                      o.push(id);
                    }
                }
              });
            }
          });
          _.each(o, function(e) {
            var type;
            if (null !== e) {
              (type = _.extend({}, _.info.pageProperties(), obj))["#element_type"] = e.nodeName.toLowerCase();
              if (_.check.isUndefined(type.name)) {
                type.name = e.getAttribute("td-name") || e.innerHTML || e.value || "\u672a\u83b7\u53d6\u6807\u8bc6";
              }
              e.addEventListener("click", function() {
                lang._sendRequest({
                  type : "track",
                  event : event,
                  properties : to ? PropertyChecker.stripProperties(type) : type
                });
              });
            }
          });
        }
      } else {
        Log.w("trackLink failed due to invalid properties.");
      }
    }
  };
  /**
   * @param {?} props
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.setPageProperty = function(props) {
    if (this._isCollectData()) {
      if (PropertyChecker.properties(props) || !this._getConfig("strict")) {
        _.extend(this.currentProps, props);
      } else {
        Log.w("PageProperty \u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef");
      }
    }
  };
  /**
   * @return {?}
   */
  ThinkingDataAnalyticsLib.prototype.getPageProperty = function() {
    return this.currentProps;
  };
  /**
   * @return {?}
   */
  ThinkingDataAnalyticsLib.prototype.getPresetProperties = function() {
    var android = _.info.properties();
    var device = {};
    device.os = android["#os"];
    device.screenWidth = android["#screen_width"];
    device.screenHeight = android["#screen_height"];
    device.browser = android["#browser"];
    device.browserVersion = android["#browser_version"];
    device.deviceId = this.getDeviceId();
    /** @type {number} */
    android = 0 - (new Date).getTimezoneOffset() / 60;
    return device.zoneOffset = android, device.toEventPresetProperties = function() {
      return {
        "#os" : device.os,
        "#screen_width" : device.screenWidth,
        "#screen_height" : device.screenHeight,
        "#browser" : device.browser,
        "#browser_version" : device.browserVersion,
        "#device_id" : device.deviceId,
        "#zone_offset" : device.zoneOffset
      };
    }, device;
  };
  /**
   * @param {string} url
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.login = function(url) {
    if (this._isCollectData()) {
      if ("number" == typeof url) {
        /** @type {string} */
        url = String(url);
      }
      if (PropertyChecker.userId(url) || !this._getConfig("strict")) {
        if (url !== this.persistence.getAccountId()) {
          this.persistence.setAccountId(url);
        }
      } else {
        Log.e("login \u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32");
      }
    }
  };
  /**
   * @param {boolean} callback
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.logout = function(callback) {
    if (this._isCollectData()) {
      if (true === callback) {
        callback = _.UUID();
        this.persistence.setDistinctId(callback);
      }
      this.persistence.setAccountId("");
    }
  };
  /**
   * @param {?} value
   * @param {!Function} ttl
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.userSet = function(value, ttl) {
    if (this._isCollectData()) {
      if (!(!PropertyChecker.propertiesMust(value) && this._getConfig("strict"))) {
        this._sendRequest({
          type : "user_set",
          properties : value
        }, ttl);
      }
    }
  };
  /**
   * @param {!Object} a
   * @param {!Function} fn
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.userSetOnce = function(a, fn) {
    if (this._isCollectData()) {
      if (!(!PropertyChecker.propertiesMust(a) && this._getConfig("strict"))) {
        this._sendRequest({
          type : "user_setOnce",
          properties : a
        }, fn);
      }
    }
  };
  /**
   * @param {?} property
   * @param {!Function} fn
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.userUnset = function(property, fn) {
    var properties;
    if (this._isCollectData()) {
      if (!(!PropertyChecker.propertyName(property) && this._getConfig("strict"))) {
        /** @type {number} */
        (properties = {})[property] = 0;
        this._sendRequest({
          type : "user_unset",
          properties : properties
        }, fn);
      }
    }
  };
  /**
   * @param {!Object} attrs
   * @param {!Function} fn
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.userAdd = function(attrs, fn) {
    var key;
    if (this._isCollectData()) {
      if (_.check.isString(attrs)) {
        /** @type {!Object} */
        key = attrs;
        /** @type {number} */
        (attrs = {})[key] = 1;
      }
      if (PropertyChecker.propertiesMust(attrs)) {
        if (!function(attrs) {
          var name;
          for (name in attrs) {
            if (!/-*\d+/.test(String(attrs[name]))) {
              return;
            }
          }
          return 1;
        }(attrs) && this._getConfig("strict")) {
          Log.w("userAdd \u5c5e\u6027\u4e2d\u7684\u503c\u53ea\u80fd\u662f\u6570\u5b57");
        } else {
          this._sendRequest({
            type : "user_add",
            properties : attrs
          }, fn);
        }
      }
    }
  };
  /**
   * @param {!Object} value
   * @param {!Function} fn
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.userAppend = function(value, fn) {
    if (this._isCollectData()) {
      if (PropertyChecker.propertiesMust(value) && function(e) {
        var i;
        for (i in e) {
          if (!_.check.isArray(e[i])) {
            return;
          }
        }
        return 1;
      }(value) || !this._getConfig("strict")) {
        this._sendRequest({
          type : "user_append",
          properties : value
        }, fn);
      } else {
        Log.w("userAppend \u5c5e\u6027\u4e2d\u7684\u503c\u53ea\u80fd\u662f Array");
      }
    }
  };
  /**
   * @param {!Function} fn
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.userDel = function(fn) {
    if (this._isCollectData()) {
      this._sendRequest({
        type : "user_del"
      }, fn);
    }
  };
  /**
   * @param {!Object} obj
   * @param {!Function} callback
   * @param {string} payload
   * @return {?}
   */
  ThinkingDataAnalyticsLib.prototype._sendRequest = function(obj, callback, payload) {
    var a;
    var i;
    var xhr;
    var url;
    var str;
    var d = _.check.isUndefined(obj.time) || !_.check.isDate(obj.time) ? new Date : obj.time;
    var data = {
      data : [{
        "#type" : obj.type,
        "#time" : _.formatDate(d),
        "#distinct_id" : this.persistence.getDistinctId()
      }]
    };
    if (this.persistence.getAccountId() && (data.data[0]["#account_id"] = this.persistence.getAccountId()), "track" === obj.type || "track_update" === obj.type || "track_overwrite" === obj.type ? (data.data[0]["#event_name"] = obj.event, "track_update" === obj.type || "track_overwrite" === obj.type ? data.data[0]["#event_id"] = obj.extraId : obj.firstCheckId && (data.data[0]["#first_check_id"] = obj.firstCheckId), data.data[0].properties = _.extend({}, {
      "#device_id" : this.persistence.getDeviceId(),
      "#zone_offset" : 0 - d.getTimezoneOffset() / 60
    }, _.info.properties(), this.getSuperProperties(), this.dynamicProperties ? this.dynamicProperties() : {}, this.getPageProperty()), d = this.persistence.removeEventTimer(obj.event), _.check.isUndefined(d) || (d = (new Date).getTime() - d, data.data[0].properties["#duration"] = parseFloat((d / 1E3).toFixed(3)))) : data.data[0].properties = {}, _.check.isObject(obj.properties) && !_.check.isEmptyObject(obj.properties) && _.extend(data.data[0].properties, 
    obj.properties), _.searchObjDate(data.data[0]), data["#app_id"] = this._getConfig("appId"), data["#flush_time"] = (new Date).getTime(), Log.i(data), this._getConfig("useAppTrack")) {
      obj = window.ThinkingData_APP_JS_Bridge || {};
      if ("object" === _typeof(obj) && obj.thinkingdata_track) {
        return obj.thinkingdata_track(JSON.stringify(data)), void("function" == typeof callback && callback());
      }
      if (/td-sdk-ios/.test(navigator.userAgent) && !window.MSStream) {
        /** @type {!Element} */
        obj = document.createElement("iframe");
        return obj.setAttribute("src", "thinkinganalytics://trackEvent?event=" + _.encodeURIComponent(JSON.stringify(data))), document.documentElement.appendChild(obj), obj.parentNode.removeChild(obj), obj = null, void("function" == typeof callback && callback());
      }
    }
    if (payload) {
      data.data[0]["#uuid"] = _.UUIDv4();
    }
    if (this._isDebug()) {
      /** @type {string} */
      i = "&data=" + _.encodeURIComponent(JSON.stringify(data.data[0])) + "&source=client&deviceId=" + this.getDeviceId() + "&appid=" + this._getConfig("appId") + "&version=" + Config.LIB_VERSION;
      if ("debug_only" === this._getConfig("mode")) {
        /** @type {string} */
        i = i + "&dryRun=1";
      }
    } else {
      /** @type {string} */
      data = JSON.stringify(data);
      a = _.base64Encode(data);
      /** @type {string} */
      url = "crc=" + _.hashCode(a);
      /** @type {string} */
      i = "&data=" + _.encodeURIComponent(a) + "&ext=" + _.encodeURIComponent(url) + "&version=" + Config.LIB_VERSION;
    }
    if ("ajax" === this._getConfig("send_method")) {
      /** @type {null} */
      xhr = null;
      xhr = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
      url = this._getConfig("serverUrl");
      xhr.open("post", url, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      str = this;
      /**
       * @return {undefined}
       */
      xhr.onreadystatechange = function() {
        var id;
        if (4 === xhr.readyState && 200 === xhr.status) {
          if (callback) {
            callback();
          }
          if (str._isDebug()) {
            if (0 !== (id = JSON.parse(xhr.response)).errorLevel) {
              Log.w(id);
            } else {
              Log.i(id);
            }
          }
        }
      };
      xhr.send(i);
    } else {
      this._sendRequestWithImage(i, callback);
    }
    if (payload && void 0 !== ("undefined" == typeof navigator ? "undefined" : _typeof(navigator)) && navigator.sendBeacon) {
      (payload = new FormData).append("data", a);
      navigator.sendBeacon(this._getConfig("serverUrl"), payload);
    }
  };
  /**
   * @return {?}
   */
  ThinkingDataAnalyticsLib.prototype._isDebug = function() {
    return "debug" === this._getConfig("mode") || "debug_only" === this._getConfig("mode");
  };
  /**
   * @param {!Object} img
   * @param {!Function} callback
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype._sendRequestWithImage = function(img, callback) {
    /**
     * @param {!Object} object
     * @return {undefined}
     */
    function done(object) {
      if (object && !object.hasCalled) {
        /** @type {boolean} */
        object.hasCalled = true;
        if (object.callback) {
          object.callback();
        }
      }
    }
    var url = (-1 !== this._getConfig("serverUrl").indexOf("?") ? this._getConfig("serverUrl") : this._getConfig("serverUrl") + "?") + img;
    /** @type {!Element} */
    img = document.createElement("img");
    /** @type {!Function} */
    img.callback = callback;
    setTimeout(done, this._getConfig("dataSendTimeout"), img);
    /**
     * @return {undefined}
     */
    img.onload = function() {
      /** @type {null} */
      this.onload = null;
      done(this);
    };
    /**
     * @return {undefined}
     */
    img.onerror = function() {
      /** @type {null} */
      this.onerror = null;
      done(this);
    };
    /**
     * @return {undefined}
     */
    img.onabort = function() {
      /** @type {null} */
      this.onabort = null;
      done(this);
    };
    img.src = url;
  };
  /**
   * @param {string} name
   * @param {!Object} value
   * @param {number} time
   * @param {!Function} fn
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.track = function(name, value, time, fn) {
    if (this._isCollectData() && (PropertyChecker.event(name) && PropertyChecker.properties(value) || !this._getConfig("strict"))) {
      this._sendRequest({
        type : "track",
        event : name,
        time : _.check.isDate(time) ? time : new Date,
        properties : value
      }, fn);
    }
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.trackUpdate = function(event) {
    if (this._isCollectData()) {
      if (_.check.isObject(event)) {
        if (PropertyChecker.event(event.eventName) && PropertyChecker.properties(event.properties) || !this._getConfig("strict")) {
          this._sendRequest({
            type : "track_update",
            event : event.eventName,
            time : _.check.isDate(event.eventTime) ? event.eventTime : new Date,
            properties : event.properties,
            extraId : event.eventId
          }, event.callback);
        }
      } else {
        Log.e("trackUpdate \u53c2\u6570\u4e0d\u7b26\u5408\u8981\u6c42");
      }
    }
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.trackOverwrite = function(event) {
    if (this._isCollectData()) {
      if (_.check.isObject(event)) {
        if (PropertyChecker.event(event.eventName) && PropertyChecker.properties(event.properties) || !this._getConfig("strict")) {
          this._sendRequest({
            type : "track_overwrite",
            event : event.eventName,
            time : _.check.isDate(event.eventTime) ? event.eventTime : new Date,
            properties : event.properties,
            extraId : event.eventId
          }, event.callback);
        }
      } else {
        Log.e("trackOverwrite \u53c2\u6570\u4e0d\u7b26\u5408\u8981\u6c42");
      }
    }
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.trackFirstEvent = function(event) {
    if (this._isCollectData()) {
      if (_.check.isObject(event)) {
        if (PropertyChecker.event(event.eventName) && PropertyChecker.properties(event.properties) || !this._getConfig("strict")) {
          this._sendRequest({
            type : "track",
            event : event.eventName,
            time : _.check.isDate(event.eventTime) ? event.eventTime : new Date,
            properties : event.properties,
            firstCheckId : event.firstCheckId || this.getDeviceId()
          }, event.callback);
        }
      } else {
        Log.e("trackFirstEvent \u53c2\u6570\u4e0d\u7b26\u5408\u8981\u6c42");
      }
    }
  };
  /**
   * @param {string} eventType
   * @param {!Array} properties
   * @param {number} time
   * @param {!Function} fn
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.trackWithBeacon = function(eventType, properties, time, fn) {
    if (PropertyChecker.event(eventType) && PropertyChecker.properties(properties) || !this._getConfig("strict")) {
      this._sendRequest({
        type : "track",
        event : eventType,
        time : _.check.isDate(time) ? time : new Date,
        properties : properties
      }, fn, true);
    }
  };
  /**
   * @param {string} url
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.identify = function(url) {
    if (this._isCollectData()) {
      if ("number" == typeof url) {
        /** @type {string} */
        url = String(url);
      }
      if (PropertyChecker.userId(url) || !this._getConfig("strict")) {
        if (url !== this.persistence.getDistinctId()) {
          this.persistence.setDistinctId(url);
        }
      } else {
        Log.e("identify \u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32");
      }
    }
  };
  /**
   * @return {?}
   */
  ThinkingDataAnalyticsLib.prototype.getDistinctId = function() {
    return this.persistence.getDistinctId();
  };
  /**
   * @return {?}
   */
  ThinkingDataAnalyticsLib.prototype.getDeviceId = function() {
    return this.persistence.getDeviceId();
  };
  /**
   * @return {?}
   */
  ThinkingDataAnalyticsLib.prototype._isCollectData = function() {
    return this.persistence.getOptTracking() && this.persistence.getEnableTracking();
  };
  /**
   * @param {!Object} properties
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.setSuperProperties = function(properties) {
    if (this._isCollectData()) {
      if (PropertyChecker.propertiesMust(properties) || !this._getConfig("strict")) {
        this.persistence.setSuperProperties(_.extend({}, this.getSuperProperties(), properties));
      } else {
        Log.w("setSuperProperties \u53c2\u6570\u4e0d\u5408\u6cd5");
      }
    }
  };
  /**
   * @return {?}
   */
  ThinkingDataAnalyticsLib.prototype.getSuperProperties = function() {
    return this.persistence.getSuperProperties();
  };
  /**
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.clearSuperProperties = function() {
    if (this._isCollectData()) {
      this.persistence.setSuperProperties({});
    }
  };
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.unsetSuperProperty = function(type) {
    var item;
    if (this._isCollectData() && _.check.isString(type)) {
      delete (item = this.getSuperProperties())[type];
      this.persistence.setSuperProperties(item);
    }
  };
  /**
   * @param {!Function} callback
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.setDynamicSuperProperties = function(callback) {
    if (this._isCollectData()) {
      if ("function" == typeof callback) {
        if (PropertyChecker.properties(callback()) || !this._getConfig("strict")) {
          /** @type {!Function} */
          this.dynamicProperties = callback;
        } else {
          Log.w("\u52a8\u6001\u516c\u5171\u5c5e\u6027\u5fc5\u987b\u8fd4\u56de\u5408\u6cd5\u7684\u5c5e\u6027\u503c");
        }
      } else {
        Log.w("setDynamicSuperProperties \u7684\u53c2\u6570\u5fc5\u987b\u662f function \u7c7b\u578b");
      }
    }
  };
  /**
   * @param {!Array} interval
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.timeEvent = function(interval) {
    if (this._isCollectData()) {
      if (_.check.isUndefined(interval)) {
        Log.w("No event name provided to timeEvent");
      } else {
        this.persistence.setEventTimer(interval, (new Date).getTime());
      }
    }
  };
  /**
   * @param {string} message
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.quick = function(message) {
    if (this._isCollectData()) {
      if ("string" == typeof message && "autoTrack" === message) {
        this._sendRequest({
          type : "track",
          event : "ta_pageview",
          properties : _.info.pageProperties()
        });
      } else {
        Log.w("quick\u65b9\u6cd5\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u529f\u80fd" + message);
      }
    }
  };
  /**
   * @param {!Object} cfg
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype._setConfig = function(cfg) {
    if (_.check.isObject(cfg)) {
      _.extend(this.config, cfg);
      if (!this._getConfig("persistencePrefix")) {
        this.config.persistencePrefix = this.config.cookiePrefix;
      }
      this.persistence;
    }
  };
  /**
   * @param {string} key
   * @return {?}
   */
  ThinkingDataAnalyticsLib.prototype._getConfig = function(key) {
    return this.config[key];
  };
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.init = function(options) {
    var msg;
    if (_.check.isUndefined(this.config)) {
      this.config = {};
      this.currentProps = this.currentProps || {};
      this._setConfig(_.extend({}, DEFAULT_CONFIG, options));
      this.persistence = new ThinkingDataPersistence(this.config);
      msg = this._getConfig("appId");
      if (!_.check.isUndefined(msg)) {
        this._setConfig({
          appId : msg.replace(/\s*/g, "")
        });
      }
      Log.showLog = this._getConfig("showLog");
      if ("image" !== (msg = this._getConfig("send_method")) && "ajax" !== msg && "beacon" !== msg) {
        Log.i("send_method", msg, "is not supported. Changed to image as default value");
        this._setConfig({
          send_method : "image"
        });
      }
      if (this._isDebug()) {
        this._setConfig({
          serverUrl : _.url("basic", options.serverUrl) + "/data_debug"
        });
      } else {
        this._setConfig({
          serverUrl : _.url("basic", options.serverUrl) + "/sync_js"
        });
      }
    } else {
      Log.i("The ThinkingData libraray has been initialized.");
    }
  };
  /**
   * @param {string} name
   * @param {!Object} options
   * @return {?}
   */
  ThinkingDataAnalyticsLib.prototype.initInstance = function(name, options) {
    if (!_.check.isString(name) || !_.check.isUndefined(options) && !_.check.isObject(options)) {
      return Log.w("invalid parameter of initInstance(string, object)."), null;
    }
    if (this._getConfig("_name") !== MASTER_INSTANCE_NAME) {
      return Log.w("This function is allowed for master instance only"), null;
    }
    if (name === MASTER_INSTANCE_NAME || this[name]) {
      return Log.w("The name ", name, " couldn't be used for create new instance."), null;
    }
    if (_.check.isUndefined(options)) {
      options = {};
    }
    var r = new ThinkingDataAnalyticsLib;
    options = _.extend({}, this.config, {
      _name : name,
      persistenceEnabled : false,
      uuid : this.getDeviceId()
    }, options);
    if (options.persistenceEnabled) {
      /** @type {string} */
      options.persistencePrefix = options.persistencePrefix + "_" + name;
    }
    r.init(options);
    this[name] = r;
  };
  /**
   * @param {string} val
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.enableTracking = function(val) {
    if ("boolean" == typeof val) {
      this.persistence.setEnableTracking(val);
    }
  };
  /**
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.optOutTracking = function() {
    this.persistence.setSuperProperties({});
    this.persistence.setAccountId("");
    this.persistence.clearEventTimer();
    this.persistence.setOptTracking(false);
  };
  /**
   * @return {undefined}
   */
  ThinkingDataAnalyticsLib.prototype.optInTracking = function() {
    this.persistence.setOptTracking(true);
  };
  var td = initAsModule();
  return td;
});
