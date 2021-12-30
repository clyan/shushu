import _ from './helper'
import Log from './log'
// 本地缓存类型，默认为 localStorage, 可配置为 cookie. localStorage 不支持跨子域名共享，如果有类似需求，请选择 cookie 类型.

/**
 * @description 
 * @param {string} data
 * @return {undefined}
 */
var ThinkingDataPersistence = function (data) {
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
      this.name =
        "string" == typeof path && "" !== path
          ? data.persistencePrefix + "_" + path
          : data.persistencePrefix + "_root";
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
      if ((url = _.cookie.get(this.name))) {
        _.cookie.remove(this.name, this.crossSubDomain);
      }
    } else {
      Log.i(
        "localStorage is not support by the browser; falling back to cookie"
      );
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
ThinkingDataPersistence.prototype._load = function (text) {
  var message;
  if (this.enabled) {
    if (
      null !== (message = null !== text ? text : this.storage.get(this.name)) &&
      _.check.isJSONString(message)
    ) {
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
ThinkingDataPersistence.prototype.getDistinctId = function () {
  return this._state.distinct_id;
};
/**
 * @param {string} callback
 * @return {undefined}
 */
ThinkingDataPersistence.prototype.setDistinctId = function (callback) {
  this._set("distinct_id", callback);
};
/**
 * @param {string} newVal
 * @return {undefined}
 */
ThinkingDataPersistence.prototype.setEnableTracking = function (newVal) {
  this._set("enable_tracking", newVal);
};
/**
 * @return {?}
 */
ThinkingDataPersistence.prototype.getEnableTracking = function () {
  return (
    !!_.check.isUndefined(this._state.enable_tracking) ||
    this._state.enable_tracking
  );
};
/**
 * @return {undefined}
 */
ThinkingDataPersistence.prototype.clear = function () {
  this._state = {};
  this._save();
};
/**
 * @param {string} stateful
 * @return {undefined}
 */
ThinkingDataPersistence.prototype.setOptTracking = function (stateful) {
  this._set("opt_tracking", stateful);
};
/**
 * @return {?}
 */
ThinkingDataPersistence.prototype.getOptTracking = function () {
  return (
    !!_.check.isUndefined(this._state.opt_tracking) || this._state.opt_tracking
  );
};
/**
 * @param {string} callback
 * @return {undefined}
 */
ThinkingDataPersistence.prototype.setDistinctId = function (callback) {
  this._set("distinct_id", callback);
};
/**
 * @return {?}
 */
ThinkingDataPersistence.prototype.getAccountId = function () {
  return this._state.account_id;
};
/**
 * @param {string} href
 * @return {undefined}
 */
ThinkingDataPersistence.prototype.setAccountId = function (href) {
  this._set("account_id", href);
};
/**
 * @return {?}
 */
ThinkingDataPersistence.prototype.getDeviceId = function () {
  return this._state.device_id;
};
/**
 * @param {string} v
 * @return {undefined}
 */
ThinkingDataPersistence.prototype.setSuperProperties = function (v) {
  this._set("super_properties", v);
};
/**
 * @return {?}
 */
ThinkingDataPersistence.prototype.getSuperProperties = function () {
  return this._state.super_properties || {};
};
/**
 * @param {!Array} t
 * @param {number} f
 * @return {undefined}
 */
ThinkingDataPersistence.prototype.setEventTimer = function (t, f) {
  var v = this._state.event_timers || {};
  /** @type {number} */
  v[t] = f;
  this._set("event_timers", v);
};
/**
 * @return {undefined}
 */
ThinkingDataPersistence.prototype.clearEventTimer = function () {
  this._set("event_timers", {});
};
/**
 * @param {?} i
 * @return {?}
 */
ThinkingDataPersistence.prototype.removeEventTimer = function (i) {
  var t = (this._state.event_timers || {})[i];
  return (
    _.check.isUndefined(t) ||
      (delete this._state.event_timers[i], this._save()),
    t
  );
};
/**
 * @param {string} data
 * @return {undefined}
 */
ThinkingDataPersistence.prototype._setDeviceId = function (data) {
  if (this._state.device_id) {
    Log.w(
      "Current device_id is ",
      this.getDeviceId(),
      ", it couldn't been set to: ",
      data
    );
  } else {
    this._set("device_id", data);
  }
};
/**
 * @return {undefined}
 */
ThinkingDataPersistence.prototype._save = function () {
  if (this.enabled) {
    this.storage.set(
      this.name,
      JSON.stringify(this._state),
      73e3,
      this.crossSubDomain
    );
  }
};
/**
 * @param {string} name
 * @param {string} value
 * @return {undefined}
 */
ThinkingDataPersistence.prototype._set = function (name, value) {
  this._state = this._state || {};
  /** @type {string} */
  this._state[name] = value;
  this._save();
};
export default ThinkingDataPersistence;
