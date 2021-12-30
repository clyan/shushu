
import _, { Config } from "./helper"
import Log from './log'
import PropertyChecker from "./PropertyChecker"
import ThinkingDataPersistence from './ThinkingDataPersistence'
/** @type {string} */
var MASTER_INSTANCE_NAME = "thinkingdata";
var DEFAULT_CONFIG = {
  _name: MASTER_INSTANCE_NAME,
  appId: "", // 您的项目的 APP_ID，需要进行配置，在您申请项目时会给出，请在此处填入
  send_method: "image", // 数据上报方式，默认为 'image'，即使用图片 GET 请求方式上报数据，可以替换为 'ajax'
  persistence: "localStorage",
  persistencePrefix: "ThinkingDataJSSDK",
  persistenceEnabled: true, //  开启子实例的本地缓存，子实例本地缓存根据子实例名称 name 区分
  crossSubDomain: true,
  maxReferrerStringLength: 200,
  showLog: true, // 是否打印上报数据，打开后将会在浏览器控制台打印上报的数据，默认为 true 即开启.
  dataSendTimeout: 3e3,
  useAppTrack: false,
  strict: false,
};
/**
   * @return {undefined}
   */
var ThinkingDataAnalyticsLib = function() {
};
/**
 * @description 如果您想要追踪页面上元素的点击事件，可以使用 trackLink 对 HTML 元素进行批量监控
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
 * @description
 * 对于一些页面中的静态属性，比如一个页面的名称或者地址，您可能希望在这个页面中触发的所有事件上都加入这个属性。
 * 类似这样的、需要适用于页面中所有事件的静态属性，您可以使用 setPageProperty 进行设置，请注意，使用 setPageProperty 设置的公共属性只对当前页面有效
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
 * @description 如果您希望获取当前页面的页面公共属性，可以调用getPageProperty来获取
 * @return {?}
 */
ThinkingDataAnalyticsLib.prototype.getPageProperty = function() {
  return this.currentProps;
};
/**
 * @description 服务端埋点需要 App 端的一些预置属性时，可以通过此方法获取 客户端 端的预置属性，再传给服务端
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
 * @description 设置账号 ID
 * 在用户产生登录行为时，可调用 login 来设置用户的账号 ID. TA 平台优先以账号 ID 作为身份标识，设置后的账号 ID 将会被保存，多次调用 login 将会覆盖先前的账号 ID：
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
 * @description 在用户产生登出行为之后，可调用 logout 来清除账号 ID，在下次调用 login 之前，将会以访客 ID 作为身份识别 ID：
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
 * @description 对于一般的用户属性，您可以调用 userSet 来进行设置，使用该接口上传的属性将会覆盖原有的属性值，如果之前不存在该用户属性，则会新建该用户属性。
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
 * @description 如果您要上传的用户属性只要设置一次，则可以调用 userSetOnce 来进行设置，当该属性之前已经有值的时候，将会忽略这条信息。
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
 * @description  重置用户属性
 * 当您要清空用户的某个用户属性值时，您可以调用 userUnset 来对指定属性进行清空操作，如果该属性还未在集群中被创建，则 userUnset 不会创建该属性。
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
 * @description 累加用户属性
 * 当您要上传数值型的属性时，您可以调用 userAdd 来对该属性进行累加操作，如果该属性还未被设置，则会赋值 0 后再进行计算。如果传入负值，等同于减法操作。
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
 * @description 自 v1.3.0 开始，您可以调用 userAppend 对 Array (List) 类型的用户数据追加元素。
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
 * 
 * @description  删除用户
 * 如果您要删除某个用户，可以调用 userDel 将这名用户删除，您将无法再查询该名用户的用户属性，但该用户产生的事件仍然可以被查询到。
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
 * @description 上传事件
 * 您可以直接调用 track 上传自定义事件，建议您根据先前梳理的文档来设置事件的属性以及发送信息的条件，
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
 * @description 可更新事件
 * @api https://docs.thinkingdata.cn/ta-manual/v3.4/installation/installation_menu/client_sdk/javascript_sdk_installation.html#_7-2-%E5%8F%AF%E6%9B%B4%E6%96%B0%E4%BA%8B%E4%BB%B6
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
 * @description 可重写事件
 * 可重写事件与可更新事件类似，区别在于可重写事件会用最新的数据完全覆盖历史数据，从效果上看相当于删除前一条数据，并入库最新的数据。TA 后台将根据事件名和事件 ID 来确定需要更新的数据。
 * @api https://docs.thinkingdata.cn/ta-manual/v3.4/installation/installation_menu/client_sdk/javascript_sdk_installation.html#_7-3-%E5%8F%AF%E9%87%8D%E5%86%99%E4%BA%8B%E4%BB%B6
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
 * @description 设置访客 ID
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
 * @description 获得访客 ID
 * @return {?}
 */
ThinkingDataAnalyticsLib.prototype.getDistinctId = function() {
  return this.persistence.getDistinctId();
};
/**
 * @description 获取设备 ID
 * @api https://docs.thinkingdata.cn/ta-manual/v3.4/installation/installation_menu/client_sdk/javascript_sdk_installation.html#_5-2-%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87-id
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
 * @description 
 * 对于一些重要的属性，譬如用户的渠道、昵称、ID 等，这些属性需要设置在每个事件中，您可以调用setSuperProperties 来设置静态公共事件属性，
 * 静态公共事件属性会对全局生效。当开启缓存时（默认打开），静态公共属性会缓存在 localStorage 或 cookie 中。
 * 静态公共属性的参数是一个 JSON 对象，其格式要求与事件属性保持一致。
 * @api https://docs.thinkingdata.cn/ta-manual/v3.4/installation/installation_menu/client_sdk/javascript_sdk_installation.html#_3-3-%E8%AE%BE%E7%BD%AE%E5%85%AC%E5%85%B1%E4%BA%8B%E4%BB%B6%E5%B1%9E%E6%80%A7
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
 * @description  如果您需要所有获取已设置静态公共属性，可以调用 getSuperProperties
 * @return {?}
 */
ThinkingDataAnalyticsLib.prototype.getSuperProperties = function() {
  return this.persistence.getSuperProperties();
};
/**
 * @description 如果您想要清空所有静态公共属性，则可以调用 clearSuperProperties；
 * @return {undefined}
 */
ThinkingDataAnalyticsLib.prototype.clearSuperProperties = function() {
  if (this._isCollectData()) {
    this.persistence.setSuperProperties({});
  }
};
/**
 * @description 如果您需要删除某个静态公共属性，您可以调用 unsetSuperProperty 清除其中一个静态公共属性；
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
 * @description 
 * 在 v1.1.0 版本中，新增了页面动态公共属性的特性。
 * 通过 setDynamicSuperProperties 设置动态公共属性的回调函数，SDK 将会在事件上报时触发回调函数，并把返回 JSON 对象加入到事件属性中。
 * setDynamicSuperProperties 的参数是一个函数，函数需要返回一个 JSON 对象，其格式要求与事件属性保持一致。
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
 * @description 
 * 您可以调用 timeEvent 来开始计时，配置您想要计时的事件名称，当您上传该事件时，计时将会结束，
 * 并且 SDK 将会自动在该事件的事件属性中加入 #duration 属性来表示记录的时长，单位为秒，timeEvent 支持跨页面计时。
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
 * @description 
 * 自动采集页面浏览事件的接口，您只需使用以下代码，JS SDK 将会自动上传用户浏览页面的事件
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
 * @description 
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
 * @description 内部使用， 调用 initInstance 会调用
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
 * @description 在 v1.1.0 版本，加入了多实例的功能，可以通过调用 initInstance 方法，可以创建子实例对象。其参数为子实例名称。之后您可以通过该名称调用子实例的接口。
 * @api https://docs.thinkingdata.cn/ta-manual/v3.4/installation/installation_menu/client_sdk/javascript_sdk_installation.html#_5-1-%E5%A4%9A%E5%AE%9E%E4%BE%8B
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
 * @description 暂停 SDK 上报（enableTracking）
 * @api https://docs.thinkingdata.cn/ta-manual/v3.4/installation/installation_menu/client_sdk/javascript_sdk_installation.html#_5-4-%E6%9A%82%E5%81%9C-%E5%81%9C%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%8A%E6%8A%A5
 * @param {string} val
 * @return {undefined}
 */
ThinkingDataAnalyticsLib.prototype.enableTracking = function(val) {
  if ("boolean" == typeof val) {
    this.persistence.setEnableTracking(val);
  }
};
/**
 * @description 停止 SDK 上报（optOutTracking）
 * @api https://docs.thinkingdata.cn/ta-manual/v3.4/installation/installation_menu/client_sdk/javascript_sdk_installation.html#_5-4-%E6%9A%82%E5%81%9C-%E5%81%9C%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%8A%E6%8A%A5
 * @return {undefined}
 */
ThinkingDataAnalyticsLib.prototype.optOutTracking = function() {
  this.persistence.setSuperProperties({});
  this.persistence.setAccountId("");
  this.persistence.clearEventTimer();
  this.persistence.setOptTracking(false);
};
/**
 * @description 重新开启上报(optInTracking)
 * @api https://docs.thinkingdata.cn/ta-manual/v3.4/installation/installation_menu/client_sdk/javascript_sdk_installation.html#_5-4-%E6%9A%82%E5%81%9C-%E5%81%9C%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%8A%E6%8A%A5
 * @return {undefined}
 */
ThinkingDataAnalyticsLib.prototype.optInTracking = function() {
  this.persistence.setOptTracking(true);
};
export default ThinkingDataAnalyticsLib;