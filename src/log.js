import _ from "./helper"
import { _classCallCheck, _createClass, _typeof  } from './utils'
/**
 * @description 输出日志
 */
const Log = function () {
    /**
     * @return {undefined}
     */
    function e() {
      _classCallCheck(this, e);
    }
    return (
      _createClass(e, null, [
        {
          key: "i",
          value: function () {
            if (!this.showLog) {
              return false;
            }
            if (
              ((true !== this.showLog && "string" !== this.showLog) ||
                (arguments[0] = _.formatJsonString(arguments[0])),
              "object" ===
                ("undefined" == typeof console
                  ? "undefined"
                  : _typeof(console)) && console.log)
            ) {
              try {
                return console.log.apply(console, arguments);
              } catch (e) {
                console.log(arguments[0]);
              }
            }
          },
        },
        {
          key: "w",
          value: function () {
            if (!this.showLog) {
              return false;
            }
            if (
              ((true !== this.showLog && "string" !== this.showLog) ||
                (arguments[0] = _.formatJsonString(arguments[0])),
              "object" ===
                ("undefined" == typeof console
                  ? "undefined"
                  : _typeof(console)) && console.warn)
            ) {
              try {
                return console.warn.apply(console, arguments);
              } catch (e) {
                console.warn(arguments[0]);
              }
            }
          },
        },
      ]),
      e
    );
}

export default Log()