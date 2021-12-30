import { $a, _a, za, Ya } from './utils'
export const Config = {
  LIB_VERSION: "1.4.3",
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
_.each = function (obj, iterator, context) {
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
          if (
            hasOwnProperty.call(obj, key) &&
            iterator.call(context, obj[key], key, obj) === breaker
          ) {
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
_.extend = function (l) {
  return (
    _.each(slice.call(arguments, 1), function (e) {
      var p;
      for (p in e) {
        if (void 0 !== e[p]) {
          l[p] = e[p];
        }
      }
    }),
    l
  );
};
/**
 * @param {!Date} d
 * @return {?}
 */
_.formatDate = function (d) {
  /**
   * @param {number} value
   * @return {?}
   */
  function formatNumber(value) {
    return value < 10 ? "0" + value : value;
  }
  return (
    d.getFullYear() +
    "-" +
    formatNumber(d.getMonth() + 1) +
    "-" +
    formatNumber(d.getDate()) +
    " " +
    formatNumber(d.getHours()) +
    ":" +
    formatNumber(d.getMinutes()) +
    ":" +
    formatNumber(d.getSeconds()) +
    "." +
    ((end = d.getMilliseconds()) < 10
      ? "00" + end
      : end < 100
      ? "0" + end
      : end)
  );
  var end;
};
/**
 * @param {?} t
 * @return {?}
 */
_.formatJsonString = function (t) {
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
_.searchObjDate = function (o) {
  if (_.check.isObject(o) || _.check.isArray(o)) {
    _.each(o, function (value, field) {
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
  isUndefined: function (x) {
    return void 0 === x;
  },
  isObject: function (obj) {
    return "[object Object]" === toString.call(obj) && null !== obj;
  },
  isEmptyObject: function (obj) {
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
  isArray: function (obj) {
    return "[object Array]" === toString.call(obj);
  },
  isString: function (value) {
    return "[object String]" === toString.call(value);
  },
  isDate: function (value) {
    return "[object Date]" === toString.call(value);
  },
  isNumber: function (obj) {
    return "[object Number]" === toString.call(obj);
  },
  isBoolean: function (obj) {
    return "[object Boolean]" === toString.call(obj);
  },
  isJSONString: function (str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  },
};
/**
 * @return {?}
 */
_.UUID = function () {
  /** @type {string} */
  var e =
    (e = String(screen.height * screen.width)) && /\d{5,}/.test(e)
      ? e.toString(16)
      : String(31242 * Math.random())
          .replace(".", "")
          .slice(0, 8);
  /** @type {string} */
  e =
    za() +
    "-" +
    Math.random().toString(16).replace(".", "") +
    "-" +
    (function () {
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
          a = a | (b[i] << (8 * i));
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
    })() +
    "-" +
    e +
    "-" +
    za();
  return (
    e ||
    (
      String(Math.random()) +
      String(Math.random()) +
      String(Math.random())
    ).slice(2, 15)
  );
};
/**
 * @return {?}
 */
_.UUIDv4 = function () {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    /** @type {number} */
    var r = (16 * Math.random()) | 0;
    return ("x" == c ? r : (3 & r) | 8).toString(16);
  });
};
/**
 * @param {string} e
 * @return {?}
 */
_.getReferrer = function (e) {
  e = e || document.referrer;
  return "string" != typeof e
    ? "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(e)
    : "string" ==
      typeof (e = (e =
        0 === e.indexOf("https://www.baidu.com/") ? e.split("?")[0] : e).slice(
        0,
        MAX_REFERRER_STRING_LENGTH
      ))
    ? e
    : "";
};
/**
 * @param {string} key
 * @param {string} val
 * @return {?}
 */
_.url = function (key, val) {
  var config = {};
  if ("tld?" === key) {
    return Ya();
  }
  if (((val = val || window.location.toString()), !key)) {
    return val;
  }
  if (((key = key.toString()), (tmp = val.match(/^mailto:([^\/].+)/)))) {
    /** @type {string} */
    config.protocol = "mailto";
    config.email = tmp[1];
  } else {
    if (
      ((tmp = (val = (tmp = val.match(/(.*?)\/#!(.*)/))
        ? tmp[1] + tmp[2]
        : val).match(/(.*?)#(.*)/)) && ((config.hash = tmp[2]), (val = tmp[1])),
      config.hash && key.match(/^#/))
    ) {
      return _a(key, config.hash);
    }
    if (
      ((tmp = val.match(/(.*?)\?(.*)/)) &&
        ((config.query = tmp[2]), (val = tmp[1])),
      config.query && key.match(/^\?/))
    ) {
      return _a(key, config.query);
    }
    if (
      ((tmp = val.match(/(.*?):?\/\/(.*)/)) &&
        ((config.protocol = tmp[1].toLowerCase()), (val = tmp[2])),
      (tmp = val.match(/(.*?)(\/.*)/)) &&
        ((config.path = tmp[2]), (val = tmp[1])),
      (config.path = (config.path || "")
        .replace(/^([^\/])/, "/$1")
        .replace(/\/$/, "")),
      (key = key.match(/^[\-0-9]+$/)
        ? key.replace(/^([^\/])/, "/$1")
        : key).match(/^\//))
    ) {
      return $a(key, config.path.substring(1));
    }
    if (
      ((tmp =
        (tmp = $a("/-1", config.path.substring(1))) &&
        tmp.match(/(.*?)\.(.*)/)) &&
        ((config.file = tmp[0]),
        (config.filename = tmp[1]),
        (config.fileext = tmp[2])),
      (tmp = val.match(/(.*):([0-9]+)$/)) &&
        ((config.port = tmp[2]), (val = tmp[1])),
      (tmp = val.match(/(.*?)@(.*)/)) &&
        ((config.auth = tmp[1]), (val = tmp[2])),
      config.auth &&
        ((tmp = config.auth.match(/(.*):(.*)/)),
        (config.user = tmp ? tmp[1] : config.auth),
        (config.pass = tmp ? tmp[2] : void 0)),
      (config.hostname = val.toLowerCase()),
      "." === key.charAt(0))
    ) {
      return $a(key, config.hostname);
    }
    if (Ya() && (tmp = config.hostname.match(Ya()))) {
      config.tld = tmp[3];
      config.domain = tmp[2] ? tmp[2] + "." + tmp[3] : void 0;
      config.sub = tmp[1] || void 0;
    }
    /** @type {string} */
    var tmp = config.port ? ":" + config.port : "";
    config.protocol =
      config.protocol || window.location.protocol.replace(":", "");
    config.port = config.port || ("https" === config.protocol ? "443" : "80");
    config.protocol =
      config.protocol || ("443" === config.port ? "https" : "http");
    /** @type {string} */
    config.basic = config.protocol + "://" + config.hostname + tmp;
  }
  return key in config ? config[key] : "{}" === key ? config : "";
};
/**
 * @param {string} val
 * @return {?}
 */
_.hashCode = function (val) {
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
_.decodeURIComponent = function (s) {
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
_.encodeURIComponent = function (value) {
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
_.utf8Encode = function (str) {
  var l;
  /** @type {string} */
  var s = "";
  /** @type {number} */
  var i = (l = 0);
  /** @type {number} */
  var mxk = (str = (str + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n"))
    .length;
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
      cmark =
        127 < p && p < 2048
          ? String.fromCharCode((p >> 6) | 192, (63 & p) | 128)
          : String.fromCharCode(
              (p >> 12) | 224,
              ((p >> 6) & 63) | 128,
              (63 & p) | 128
            );
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
_.base64Encode = function (data) {
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
  for (
    ;
    (o =
      ((VLQ_BASE_MASK =
        (data.charCodeAt(i++) << 16) |
        (data.charCodeAt(i++) << 8) |
        data.charCodeAt(i++)) >>
        12) &
      63),
      (r = (VLQ_BASE_MASK >> 6) & 63),
      (digit = 63 & VLQ_BASE_MASK),
      (CSSTxt[n++] =
        s.charAt((VLQ_BASE_MASK >> 18) & 63) +
        s.charAt(o) +
        s.charAt(r) +
        s.charAt(digit)),
      i < data.length;

  ) {}
  switch (((enc = CSSTxt.join("")), data.length % 3)) {
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
  get: function (o) {
    /** @type {string} */
    var id = o + "=";
    /** @type {!Array<string>} */
    var handlersIndex = document.cookie.split(";");
    /** @type {number} */
    var j = 0;
    for (; j < handlersIndex.length; j++) {
      /** @type {string} */
      var i = handlersIndex[j];
      for (; " " === i.charAt(0); ) {
        /** @type {string} */
        i = i.substring(1, i.length);
      }
      if (0 === i.indexOf(id)) {
        return _.decodeURIComponent(i.substring(id.length, i.length));
      }
    }
    return null;
  },
  set: function (n, v, id, height, scaleX) {
    var d;
    /** @type {string} */
    var prefix = "";
    /** @type {string} */
    var th_field = "";
    /** @type {string} */
    var str = "";
    id = null === id ? 73e3 : id;
    if (height) {
      /** @type {string} */
      prefix = (d = _.url("domain", location.href)) ? "; domain=." + d : "";
    }
    if (id) {
      /** @type {!Date} */
      d = new Date();
      if ("s" === String(id).slice(-1)) {
        d.setTime(d.getTime() + 1e3 * Number(String(id).slice(0, -1)));
      } else {
        d.setTime(d.getTime() + 24 * id * 60 * 60 * 1e3);
      }
      /** @type {string} */
      th_field = "; expires=" + d.toGMTString();
    }
    if (scaleX) {
      /** @type {string} */
      str = "; secure";
    }
    /** @type {string} */
    str =
      n + "=" + encodeURIComponent(v) + th_field + "; path=/" + prefix + str;
    return (document.cookie = str);
  },
  remove: function (e, original) {
    _.cookie.set(e, "", -1, original);
  },
};
_.localStorage = {
  get: function (o) {
    try {
      return window.localStorage.getItem(o);
    } catch (e) {
      _.localStorage.error(e);
    }
  },
  parse: function (config) {
    var subselects;
    try {
      /** @type {*} */
      subselects = JSON.parse(_.localStorage.get(config)) || null;
    } catch (e) {
      _.localStorage.error(e);
    }
    return subselects;
  },
  set: function (el, t) {
    try {
      window.localStorage.setItem(el, t);
    } catch (e) {
      _.localStorage.error(e);
    }
  },
  remove: function (o) {
    try {
      window.localStorage.removeItem(o);
    } catch (e) {
      _.localStorage.error(e);
    }
  },
  error: function (fn) {
    console.error("localStorage error: " + fn);
  },
  isSupported: function () {
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
  },
};
/**
 * @param {!Object} value
 * @return {?}
 */
_.stripEmptyProperties = function (value) {
  var result = {};
  return (
    _.each(value, function (e, hashId) {
      if (_.check.isString(e) && 0 < e.length) {
        /** @type {!Object} */
        result[hashId] = e;
      }
    }),
    result
  );
};
_.info = {
  os: function () {
    /** @type {string} */
    var agent = navigator.userAgent;
    return /Windows/i.test(agent)
      ? /Phone/.test(agent) || /WPDesktop/.test(agent)
        ? "Windows Phone"
        : "Windows"
      : /(iPhone|iPad|iPod)/.test(agent)
      ? "iOS"
      : /Android/.test(agent)
      ? "Android"
      : /(BlackBerry|PlayBook|BB10)/i.test(agent)
      ? "BlackBerry"
      : /Mac/i.test(agent)
      ? "Mac OS X"
      : /Linux/.test(agent)
      ? "Linux"
      : /CrOS/.test(agent)
      ? "Chrome OS"
      : "";
  },
  browser: function () {
    var browser = {
      type: "",
      version: "",
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
                                      if (
                                        null !== name.match(/tencenttraveler/)
                                      ) {
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
                                            if (
                                              null !== name.match(/ubrowser/)
                                            ) {
                                              /** @type {string} */
                                              browser.type = "uc";
                                              r.push(/ubrowser\/([\d.]+)/);
                                            } else {
                                              if (
                                                null !== name.match(/ucbrowser/)
                                              ) {
                                                /** @type {string} */
                                                browser.type = "uc";
                                                r.push(/ucbrowser\/([\d.]+)/);
                                              } else {
                                                if (
                                                  null !== name.match(/firefox/)
                                                ) {
                                                  /** @type {string} */
                                                  browser.type = "firefox";
                                                  r.push(/firefox\/([\d.]+)/);
                                                } else {
                                                  if (
                                                    null !== name.match(/opera/)
                                                  ) {
                                                    /** @type {string} */
                                                    browser.type = "opera";
                                                    r.push(/opera\/([\d.]+)/);
                                                  } else {
                                                    if (
                                                      null !== name.match(/opr/)
                                                    ) {
                                                      /** @type {string} */
                                                      browser.type = "opera";
                                                      r.push(/opr\/([\d.]+)/);
                                                    } else {
                                                      if (
                                                        null !==
                                                        name.match(/chrome/)
                                                      ) {
                                                        /** @type {string} */
                                                        browser.type = "chrome";
                                                        r.push(
                                                          /chrome\/([\d.]+)/
                                                        );
                                                      } else {
                                                        if (
                                                          null !==
                                                          name.match(/safari/)
                                                        ) {
                                                          /** @type {string} */
                                                          browser.type =
                                                            "safari";
                                                          r.push(
                                                            /version\/([\d.]+)/
                                                          );
                                                        } else {
                                                          if (
                                                            !(
                                                              null ===
                                                                name.match(
                                                                  /trident/
                                                                ) &&
                                                              null ===
                                                                name.match(
                                                                  /msie/
                                                                )
                                                            )
                                                          ) {
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
        value = name.match(/trident\/([\d.]+)/)
          ? name.match(/trident\/([\d.]+)/)[1]
          : "";
        /** @type {string} */
        version = name.match(/msie ([\d.]+)/)
          ? name.match(/msie ([\d.]+)/)[1]
          : "";
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
  properties: function () {
    var browser = _.info.browser();
    return _.extend({
      "#os": _.info.os(),
      "#lib_version": Config.LIB_VERSION,
      "#lib": "js",
      "#screen_height": screen.height,
      "#screen_width": screen.width,
      "#browser": browser.type,
      "#browser_version": browser.version,
    });
  },
  pageProperties: function () {
    var data = _.getReferrer();
    return _.stripEmptyProperties({
      "#referrer": data,
      "#referrer_host": data && _.url("hostname", data),
      "#url": location.href,
      "#url_path": location.pathname,
      "#title": document.title,
    });
  },
};
export default _