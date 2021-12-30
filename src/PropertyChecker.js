import _ from "./helper"
import Log from './log'
import { _classCallCheck, _createClass  } from './utils'
/** @type {!RegExp} */
var KEY_NAME_MATCH_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{0,49}$/;
var PropertyChecker = function () {
  /**
   * @return {undefined}
   */
  function e() {
    _classCallCheck(this, e);
  }
  return (
    _createClass(e, null, [
      {
        key: "stripProperties",
        value: function (e) {
          return (
            _.check.isObject(e) &&
              _.each(e, function (value, error) {
                if (
                  !(
                    _.check.isString(value) ||
                    _.check.isNumber(value) ||
                    _.check.isDate(value) ||
                    _.check.isBoolean(value) ||
                    _.check.isArray(value) ||
                    _.check.isObject(value)
                  )
                ) {
                  Log.w(
                    "\u60a8\u7684\u6570\u636e-",
                    error,
                    value,
                    "-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u53ef\u80fd\u65e0\u6cd5\u6b63\u786e\u5165\u5e93. \u5c5e\u6027\u503c\u53ea\u652f\u6301 String, Number, Date, Boolean, Array\uff0cObject"
                  );
                }
              }),
            e
          );
        },
      },
      {
        key: "_checkPropertiesKey",
        value: function (a) {
          /** @type {boolean} */
          var x = true;
          return (
            _.each(a, function (canCreateDiscussions, message) {
              if (!KEY_NAME_MATCH_REGEX.test(message)) {
                Log.w("\u4e0d\u5408\u6cd5\u7684 KEY \u503c: " + message);
                /** @type {boolean} */
                x = false;
              }
            }),
            x
          );
        },
      },
      {
        key: "event",
        value: function (message) {
          return (
            !(
              !_.check.isString(message) || !KEY_NAME_MATCH_REGEX.test(message)
            ) ||
            (Log.w(
              "\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f, eventName \u5fc5\u987b\u662f\u82f1\u6587\u5b57\u6bcd\u6216\u8005 '_' \u5f00\u5934, \u5305\u542b\u5b57\u6bcd\u548c\u6570\u5b57\u7684\u4e0d\u8d85\u8fc750\u4e2a\u5b57\u7b26\u7684\u5b57\u7b26\u4e32: " +
                message
            ),
            false)
          );
        },
      },
      {
        key: "propertyName",
        value: function (message) {
          return (
            !(
              !_.check.isString(message) || !KEY_NAME_MATCH_REGEX.test(message)
            ) ||
            (Log.w(
              "\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f, propertyName \u5fc5\u987b\u662f\u82f1\u6587\u5b57\u6bcd\u6216\u8005 '_' \u5f00\u5934, \u5305\u542b\u5b57\u6bcd\u548c\u6570\u5b57\u7684\u4e0d\u8d85\u8fc750\u4e2a\u5b57\u7b26\u7684\u5b57\u7b26\u4e32: " +
                message
            ),
            false)
          );
        },
      },
      {
        key: "properties",
        value: function (e) {
          return (
            this.stripProperties(e),
            !e ||
              (_.check.isObject(e)
                ? !!this._checkPropertiesKey(e) ||
                  (Log.w(
                    "\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f, properties \u7684 key \u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934\uff0c\u5305\u542b\u6570\u5b57\u3001\u5b57\u6bcd\u548c\u4e0b\u5212\u7ebf _\uff0c\u957f\u5ea6\u6700\u5927\u4e3a50\u4e2a\u5b57\u7b26"
                  ),
                  false)
                : (Log.w(
                    "properties \u53ef\u4ee5\u6ca1\u6709\uff0c\u4f46\u6709\u7684\u8bdd\u5fc5\u987b\u662f\u5bf9\u8c61"
                  ),
                  false))
          );
        },
      },
      {
        key: "propertiesMust",
        value: function (e) {
          return (
            this.stripProperties(e),
            void 0 === e || !_.check.isObject(e) || _.check.isEmptyObject(e)
              ? (Log.w(
                  "properties\u5fc5\u987b\u662f\u5bf9\u8c61\u4e14\u6709\u503c"
                ),
                false)
              : !!this._checkPropertiesKey(e) ||
                (Log.w(
                  "\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f, properties \u7684 key \u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934\uff0c\u5305\u542b\u6570\u5b57\u3001\u5b57\u6bcd\u548c\u4e0b\u5212\u7ebf _\uff0c\u957f\u5ea6\u6700\u5927\u4e3a50\u4e2a\u5b57\u7b26"
                ),
                false)
          );
        },
      },
      {
        key: "userId",
        value: function (e) {
          return (
            !(!_.check.isString(e) || !/^.{1,63}$/.test(e)) ||
            (Log.w(
              "\u7528\u6237 id \u5fc5\u987b\u662f\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u4e14\u5c0f\u4e8e 64 \u4f4d\u7684\u5b57\u7b26\u4e32"
            ),
            false)
          );
        },
      },
    ]),
    e
  );
};

export default PropertyChecker();