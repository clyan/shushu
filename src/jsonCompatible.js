import { _typeof } from "./utils";
/**
 * JSON APi兼容 处理
 */
if ("object" !== ("undefined" == typeof JSON ? "undefined" : _typeof(JSON))) {
  JSON = {};
}
/**
 * @description 格式化， 小于10补0
 * @param {number} n
 * @return {?}
 */
function format(n) {
  return n < 10 ? "0" + n : n;
}
/**
 * @description 调用对象的valueOf
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
  return (
    (rx_escapable.lastIndex = 0),
    rx_escapable.test(string)
      ? '"' +
        string.replace(rx_escapable, function (t) {
          var type = meta[t];
          return "string" == typeof type
            ? type
            : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
        }) +
        '"'
      : '"' + string + '"'
  );
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
  switch (
    (value &&
      "object" === _typeof(value) &&
      "function" == typeof value.toJSON &&
      (value = value.toJSON(key)),
    _typeof(
      (value = "function" == typeof rep ? rep.call(holder, key, value) : value)
    ))
  ) {
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
      if (
        ((gap = gap + indent),
        (partial = []),
        "[object Array]" === Object.prototype.toString.apply(value))
      ) {
        length = value.length;
        /** @type {number} */
        i = 0;
        for (; i < length; i = i + 1) {
          partial[i] = str(i, value) || "null";
        }
        return (
          (v =
            0 === partial.length
              ? "[]"
              : gap
              ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]"
              : "[" + partial.join(",") + "]"),
          (gap = mind),
          v
        );
      }
      if (rep && "object" === _typeof(rep)) {
        length = rep.length;
        /** @type {number} */
        i = 0;
        for (; i < length; i = i + 1) {
          if ("string" == typeof rep[i] && (v = str((k = rep[i]), value))) {
            partial.push(quote(k) + (gap ? ": " : ":") + v);
          }
        }
      } else {
        for (k in value) {
          if (
            Object.prototype.hasOwnProperty.call(value, k) &&
            (v = str(k, value))
          ) {
            partial.push(quote(k) + (gap ? ": " : ":") + v);
          }
        }
      }
      return (
        (v =
          0 === partial.length
            ? "{}"
            : gap
            ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}"
            : "{" + partial.join(",") + "}"),
        (gap = mind),
        v
      );
  }
}
/** @type {!RegExp} */
var rx_one = /^[\],:{}\s]*$/;
/** @type {!RegExp} */
var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
/** @type {!RegExp} */
var rx_three =
  /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
/** @type {!RegExp} */
var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
/** @type {!RegExp} */
var rx_escapable =
  /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
/** @type {!RegExp} */
var rx_dangerous =
  /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
var gap;
var indent;
var meta;
var rep;

if ("function" != typeof Date.prototype.toJSON) {
  /**
   * @param {*=} p0
   * @return {string}
   */
  Date.prototype.toJSON = function () {
    return isFinite(this.valueOf())
      ? this.getUTCFullYear() +
          "-" +
          format(this.getUTCMonth() + 1) +
          "-" +
          format(this.getUTCDate()) +
          "T" +
          format(this.getUTCHours()) +
          ":" +
          format(this.getUTCMinutes()) +
          ":" +
          format(this.getUTCSeconds()) +
          "Z"
      : null;
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
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\",
  };
  /**
   * @param {*} a
   * @param {(Array<string>|function(string, *): *|null)=} b
   * @param {(number|string)=} c
   * @return {string}
   */
  JSON.stringify = function (a, b, c) {
    var d;
    if (((indent = gap = ""), "number" == typeof c)) {
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
    if (
      (rep = b) &&
      "function" != typeof b &&
      ("object" !== _typeof(b) || "number" != typeof b.length)
    ) {
      throw new Error("JSON.stringify");
    }
    return str("", {
      "": a,
    });
  };
}

if ("function" != typeof JSON.parse) {
  /**
   * @param {string} text0
   * @param {function(string, *): *=} reviver
   * @return {*}
   */
  JSON.parse = function (text0, reviver) {
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
    if (
      ((text0 = String(text0)),
      (rx_dangerous.lastIndex = 0),
      rx_dangerous.test(text0) &&
        (text0 = text0.replace(rx_dangerous, function (strUtf8) {
          return (
            "\\u" + ("0000" + strUtf8.charCodeAt(0).toString(16)).slice(-4)
          );
        })),
      rx_one.test(
        text0.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")
      ))
    ) {
      return (
        (j = eval("(" + text0 + ")")),
        "function" == typeof reviver
          ? walk(
              {
                "": j,
              },
              ""
            )
          : j
      );
    }
    throw new SyntaxError("JSON.parse");
  };
}
