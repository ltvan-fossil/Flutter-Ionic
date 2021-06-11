var __BUNDLE_START_TIME__=this.nativePerformanceNow?nativePerformanceNow():Date.now(),__DEV__=false,process=this.process||{};process.env=process.env||{};process.env.NODE_ENV=process.env.NODE_ENV||"production";
(function (global) {
  "use strict";

  global.__non_webpack_require__ = LiquidCore.require;
  global.__webpack_require__ = metroRequire;
  global.__r = metroRequire;
  global.__d = define;
  global.__c = clear;
  global.__registerSegment = registerSegment;
  var modules = clear();
  const EMPTY = {};
  const _ref = {},
        hasOwnProperty = _ref.hasOwnProperty;

  function clear() {
    modules = Object.create(null);
    return modules;
  }

  function define(factory, moduleId, dependencyMap) {
    if (modules[moduleId] != null) {
      return;
    }

    const mod = {
      dependencyMap,
      factory,
      hasError: false,
      importedAll: EMPTY,
      importedDefault: EMPTY,
      isInitialized: false,
      isCyclic: false,
      publicModule: {
        exports: {}
      }
    };
    modules[moduleId] = mod;
  }

  function proxyModuleExports(module) {
    module.exports = function () {};

    const handler = {
      get: (t, p, r) => Reflect.get(module.exports, p, r),
      set: (t, p, v, r) => Reflect.set(module.exports, p, v, r),
      setPrototypeOf: (t, p) => Reflect.setPrototypeOf(module.exports, p),
      getPrototypeOf: t => Reflect.getPrototypeOf(module.exports),
      getOwnPropertyDescriptor: (t, p) => Reflect.getOwnPropertyDescriptor(module.exports, p),
      defineProperty: (t, p, d) => Reflect.defineProperty(module.exports, p, d),
      has: (t, p) => Reflect.has(module.exports, p),
      deleteProperty: (t, p) => Reflect.deleteProperty(module.exports, p),
      ownKeys: t => Reflect.ownKeys(module.exports),
      apply: (t, z, a) => Reflect.apply(module.exports, z, a),
      construct: (t, a, n) => Reflect.construct(module.exports, a, n),
      preventExtensions: t => Reflect.preventExtensions(module.exports),
      isExtensible: t => Reflect.isExtensible(module.exports)
    };
    return new Proxy(function () {}, handler);
  }

  function metroRequire(moduleId) {
    const moduleIdReallyIsNumber = moduleId;
    const module = modules[moduleIdReallyIsNumber];
    return module && module.isCyclic ? proxyModuleExports(module) : module && module.isInitialized ? module.publicModule.exports : guardedLoadModule(moduleIdReallyIsNumber, module);
  }

  function metroImportDefault(moduleId) {
    const moduleIdReallyIsNumber = moduleId;

    if (modules[moduleIdReallyIsNumber] && modules[moduleIdReallyIsNumber].importedDefault !== EMPTY) {
      return modules[moduleIdReallyIsNumber].importedDefault;
    }

    const exports = metroRequire(moduleIdReallyIsNumber);
    const importedDefault = exports && exports.__esModule ? exports.default : exports;
    return modules[moduleIdReallyIsNumber].importedDefault = importedDefault;
  }

  metroRequire.importDefault = metroImportDefault;

  function metroImportAll(moduleId) {
    const moduleIdReallyIsNumber = moduleId;

    if (modules[moduleIdReallyIsNumber] && modules[moduleIdReallyIsNumber].importedAll !== EMPTY) {
      return modules[moduleIdReallyIsNumber].importedAll;
    }

    const exports = metroRequire(moduleIdReallyIsNumber);
    let importedAll;

    if (exports && exports.__esModule) {
      importedAll = exports;
    } else {
      importedAll = {};

      if (exports) {
        for (const key in exports) {
          if (hasOwnProperty.call(exports, key)) {
            importedAll[key] = exports[key];
          }
        }
      }

      importedAll.default = exports;
    }

    return modules[moduleIdReallyIsNumber].importedAll = importedAll;
  }

  metroRequire.importAll = metroImportAll;
  let inGuard = false;

  function guardedLoadModule(moduleId, module) {
    if (!inGuard && global.ErrorUtils) {
      inGuard = true;
      let returnValue;

      try {
        returnValue = loadModuleImplementation(moduleId, module);
      } catch (e) {
        global.ErrorUtils.reportFatalError(e);
      }

      inGuard = false;
      return returnValue;
    } else {
      return loadModuleImplementation(moduleId, module);
    }
  }

  const ID_MASK_SHIFT = 16;
  const LOCAL_ID_MASK = 65535;

  function unpackModuleId(moduleId) {
    const segmentId = moduleId >>> ID_MASK_SHIFT;
    const localId = moduleId & LOCAL_ID_MASK;
    return {
      segmentId,
      localId
    };
  }

  metroRequire.unpackModuleId = unpackModuleId;

  function packModuleId(value) {
    return (value.segmentId << ID_MASK_SHIFT) + value.localId;
  }

  metroRequire.packModuleId = packModuleId;
  const moduleDefinersBySegmentID = [];

  function registerSegment(segmentID, moduleDefiner) {
    moduleDefinersBySegmentID[segmentID] = moduleDefiner;
  }

  function loadModuleImplementation(moduleId, module) {
    if (!module && moduleDefinersBySegmentID.length > 0) {
      const _unpackModuleId = unpackModuleId(moduleId),
            segmentId = _unpackModuleId.segmentId,
            localId = _unpackModuleId.localId;

      const definer = moduleDefinersBySegmentID[segmentId];

      if (definer != null) {
        definer(localId);
        module = modules[moduleId];
      }
    }

    const nativeRequire = global.nativeRequire;

    if (!module && nativeRequire) {
      const _unpackModuleId2 = unpackModuleId(moduleId),
            segmentId = _unpackModuleId2.segmentId,
            localId = _unpackModuleId2.localId;

      nativeRequire(localId, segmentId);
      module = modules[moduleId];
    }

    if (!module) {
      throw unknownModuleError(moduleId);
    }

    if (module.hasError) {
      throw moduleThrewError(moduleId, module.error);
    }

    module.isInitialized = true;
    module.isCyclic = true;
    const _module = module,
          factory = _module.factory,
          dependencyMap = _module.dependencyMap;

    try {
      const moduleObject = module.publicModule;
      moduleObject.id = moduleId;
      factory(global, metroRequire, metroImportDefault, metroImportAll, moduleObject, moduleObject.exports, dependencyMap);
      {
        module.factory = undefined;
        module.dependencyMap = undefined;
      }
      module.isCyclic = false;
      return moduleObject.exports;
    } catch (e) {
      module.hasError = true;
      module.error = e;
      module.isInitialized = false;
      module.isCyclic = false;
      module.publicModule.exports = undefined;
      throw e;
    } finally {}
  }

  function unknownModuleError(id) {
    let message = 'Requiring unknown module "' + id + '".';
    return Error(message);
  }

  function moduleThrewError(id, error) {
    const displayName = id;
    return Error('Requiring module "' + displayName + '", which threw an exception: ' + error);
  }
})(typeof globalThis !== 'undefined' ? globalThis : typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  const AStatus = {
    Good: 'Good',
    Moderate: 'Moderate',
    Unhealthy1: 'Sensitive',
    Unhealthy: 'Unhealthy',
    VeryUnhealthy: 'Very Unhealthy',
    Hazardous: 'Hazardous'
  };
  const statusMap = {
    "Good": "Air quality is considered satisfactory, and air pollution poses little or no risk",
    "Moderate": "There may be a moderate health concern for people being sensitive to air pollution.",
    "Sensitive": "Childrent and people with respiratory disease may experience health effects.",
    "Unhealthy": "Everyone experience health effects.",
    "Very Unhealthy": "Health warnings of emergency conditions. The entire population is affected.",
    "Hazardous": "Health alert: everyone may experience more serious health effects"
  };
  var aqiWAppReqId = 0;
  setInterval(function () {}, 1000);
  LiquidCore.on('ping', function () {});
  LiquidCore.on('response', function (payload) {
    console.log("Receive response, payload=" + JSON.stringify(payload));
    var reqType = payload.type;

    if (reqType == 'one_time_gps_data') {
      var axios = _$$_REQUIRE(_dependencyMap[0]);

      axios.get(`https://api.airvisual.com/v2/nearest_city?key=ce2d6b01-2c31-457a-b3f3-80fb400d8901&lat=${payload.lat}&lon=${payload.long}`).then(function (response) {
        var aqi = response.data.data.current.pollution.aqius;
        var status = AStatus.Good;

        if (aqi >= 0 && aqi <= 50) {
          status = AStatus.Good;
        } else if (aqi >= 51 && aqi <= 100) {
          status = AStatus.Moderate;
        } else if (aqi >= 101 && aqi <= 150) {
          status = AStatus.Unhealthy1;
        } else if (aqi >= 151 && aqi <= 200) {
          status = AStatus.Unhealthy;
        } else if (aqi >= 201 && aqi <= 300) {
          status = AStatus.VeryUnhealthy;
        } else {
          status = AStatus.Moderate;
        }

        var bleData = {
          index: {
            status: status,
            aqi: aqi,
            location: response.data.data.city
          }
        };
        console.log("Request send_ble_response_data, bleData=" + bleData);
        LiquidCore.emit('request', {
          type: 'send_ble_response_data',
          req_uuid: Math.random().toString(),
          req_id: aqiWAppReqId,
          data: bleData
        });
      }).catch(function (error) {
        console.log(error);
      }).then(function () {});
    } else if (reqType == 'send_ble_response_data') {}
  });
  LiquidCore.on('event', function (payload) {
    console.log("Receive event, payload=" + JSON.stringify(payload));
    var eventType = payload.type;

    if (eventType == 'wapp_req') {
      var reqType = payload.req;

      if (reqType == 'aqi_info') {
        aqiWAppReqId = payload.req_id;
        console.log("Request one_time_gps_data");
        var result = LiquidCore.emit('request', {
          type: 'one_time_gps_data',
          req_uuid: Math.random().toString()
        });
        console.log("Requested one_time_gps_data " + result.toString());
      } else if (reqType == 'get_desc') {
        var bleData = {
          status_desc: {
            status: payload.status,
            desc: statusMap[payload.status]
          }
        };
        console.log("Request send_ble_response_data, bleData=" + bleData);
        LiquidCore.emit('request', {
          type: 'send_ble_response_data',
          req_uuid: Math.random().toString(),
          req_id: payload.req_id,
          data: bleData
        });
      }
    }
  });
  LiquidCore.emit('ready');
},0,[1]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  module.exports = _$$_REQUIRE(_dependencyMap[0]);
},1,[2]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  var bind = _$$_REQUIRE(_dependencyMap[1]);

  var Axios = _$$_REQUIRE(_dependencyMap[2]);

  var mergeConfig = _$$_REQUIRE(_dependencyMap[3]);

  var defaults = _$$_REQUIRE(_dependencyMap[4]);

  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    utils.extend(instance, Axios.prototype, context);
    utils.extend(instance, context);
    return instance;
  }

  var axios = createInstance(defaults);
  axios.Axios = Axios;

  axios.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios.defaults, instanceConfig));
  };

  axios.Cancel = _$$_REQUIRE(_dependencyMap[5]);
  axios.CancelToken = _$$_REQUIRE(_dependencyMap[6]);
  axios.isCancel = _$$_REQUIRE(_dependencyMap[7]);

  axios.all = function all(promises) {
    return Promise.all(promises);
  };

  axios.spread = _$$_REQUIRE(_dependencyMap[8]);
  module.exports = axios;
  module.exports.default = axios;
},2,[3,4,5,42,11,43,44,10,45]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var bind = _$$_REQUIRE(_dependencyMap[0]);

  var toString = Object.prototype.toString;

  function isArray(val) {
    return toString.call(val) === '[object Array]';
  }

  function isUndefined(val) {
    return typeof val === 'undefined';
  }

  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
  }

  function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
  }

  function isFormData(val) {
    return typeof FormData !== 'undefined' && val instanceof FormData;
  }

  function isArrayBufferView(val) {
    var result;

    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    }

    return result;
  }

  function isString(val) {
    return typeof val === 'string';
  }

  function isNumber(val) {
    return typeof val === 'number';
  }

  function isObject(val) {
    return val !== null && typeof val === 'object';
  }

  function isDate(val) {
    return toString.call(val) === '[object Date]';
  }

  function isFile(val) {
    return toString.call(val) === '[object File]';
  }

  function isBlob(val) {
    return toString.call(val) === '[object Blob]';
  }

  function isFunction(val) {
    return toString.call(val) === '[object Function]';
  }

  function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  }

  function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }

  function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
  }

  function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
      return false;
    }

    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  function forEach(obj, fn) {
    if (obj === null || typeof obj === 'undefined') {
      return;
    }

    if (typeof obj !== 'object') {
      obj = [obj];
    }

    if (isArray(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }

  function merge() {
    var result = {};

    function assignValue(val, key) {
      if (typeof result[key] === 'object' && typeof val === 'object') {
        result[key] = merge(result[key], val);
      } else {
        result[key] = val;
      }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }

    return result;
  }

  function deepMerge() {
    var result = {};

    function assignValue(val, key) {
      if (typeof result[key] === 'object' && typeof val === 'object') {
        result[key] = deepMerge(result[key], val);
      } else if (typeof val === 'object') {
        result[key] = deepMerge({}, val);
      } else {
        result[key] = val;
      }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }

    return result;
  }

  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }

  module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    deepMerge: deepMerge,
    extend: extend,
    trim: trim
  };
},3,[4]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  module.exports = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);

      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }

      return fn.apply(thisArg, args);
    };
  };
},4,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  var buildURL = _$$_REQUIRE(_dependencyMap[1]);

  var InterceptorManager = _$$_REQUIRE(_dependencyMap[2]);

  var dispatchRequest = _$$_REQUIRE(_dependencyMap[3]);

  var mergeConfig = _$$_REQUIRE(_dependencyMap[4]);

  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  Axios.prototype.request = function request(config) {
    if (typeof config === 'string') {
      config = arguments[1] || {};
      config.url = arguments[0];
    } else {
      config = config || {};
    }

    config = mergeConfig(this.defaults, config);

    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = 'get';
    }

    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  };

  Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
  };

  utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    Axios.prototype[method] = function (url, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url
      }));
    };
  });
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    Axios.prototype[method] = function (url, data, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url,
        data: data
      }));
    };
  });
  module.exports = Axios;
},5,[3,6,7,8,42]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
  }

  module.exports = function buildURL(url, params, paramsSerializer) {
    if (!params) {
      return url;
    }

    var serializedParams;

    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }

        if (utils.isArray(val)) {
          key = key + '[]';
        } else {
          val = [val];
        }

        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }

          parts.push(encode(key) + '=' + encode(v));
        });
      });
      serializedParams = parts.join('&');
    }

    if (serializedParams) {
      var hashmarkIndex = url.indexOf('#');

      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }

      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }

    return url;
  };
},6,[3]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  function InterceptorManager() {
    this.handlers = [];
  }

  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
  };

  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };

  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };

  module.exports = InterceptorManager;
},7,[3]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  var transformData = _$$_REQUIRE(_dependencyMap[1]);

  var isCancel = _$$_REQUIRE(_dependencyMap[2]);

  var defaults = _$$_REQUIRE(_dependencyMap[3]);

  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }

  module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = config.headers || {};
    config.data = transformData(config.data, config.headers, config.transformRequest);
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
      delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData(response.data, response.headers, config.transformResponse);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);

        if (reason && reason.response) {
          reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
        }
      }

      return Promise.reject(reason);
    });
  };
},8,[3,9,10,11]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  module.exports = function transformData(data, headers, fns) {
    utils.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });
    return data;
  };
},9,[3]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };
},10,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  var normalizeHeaderName = _$$_REQUIRE(_dependencyMap[1]);

  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }

  function getDefaultAdapter() {
    var adapter;

    if (typeof XMLHttpRequest !== 'undefined') {
      adapter = _$$_REQUIRE(_dependencyMap[2]);
    } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
      adapter = _$$_REQUIRE(_dependencyMap[3]);
    }

    return adapter;
  }

  var defaults = {
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Accept');
      normalizeHeaderName(headers, 'Content-Type');

      if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
        return data;
      }

      if (utils.isArrayBufferView(data)) {
        return data.buffer;
      }

      if (utils.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }

      if (utils.isObject(data)) {
        setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
        return JSON.stringify(data);
      }

      return data;
    }],
    transformResponse: [function transformResponse(data) {
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (e) {}
      }

      return data;
    }],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  defaults.headers = {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  };
  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });
  module.exports = defaults;
},11,[3,12,13,23]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };
},12,[3]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  var settle = _$$_REQUIRE(_dependencyMap[1]);

  var buildURL = _$$_REQUIRE(_dependencyMap[2]);

  var buildFullPath = _$$_REQUIRE(_dependencyMap[3]);

  var parseHeaders = _$$_REQUIRE(_dependencyMap[4]);

  var isURLSameOrigin = _$$_REQUIRE(_dependencyMap[5]);

  var createError = _$$_REQUIRE(_dependencyMap[6]);

  module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;

      if (utils.isFormData(requestData)) {
        delete requestHeaders['Content-Type'];
      }

      var request = new XMLHttpRequest();

      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password || '';
        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
      }

      var fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;

      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }

        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };
        settle(resolve, reject, response);
        request = null;
      };

      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }

        reject(createError('Request aborted', config, 'ECONNABORTED', request));
        request = null;
      };

      request.onerror = function handleError() {
        reject(createError('Network Error', config, null, request));
        request = null;
      };

      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }

        reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request));
        request = null;
      };

      if (utils.isStandardBrowserEnv()) {
        var cookies = _$$_REQUIRE(_dependencyMap[7]);

        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }

      if ('setRequestHeader' in request) {
        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
            delete requestHeaders[key];
          } else {
            request.setRequestHeader(key, val);
          }
        });
      }

      if (!utils.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }

      if (config.responseType) {
        try {
          request.responseType = config.responseType;
        } catch (e) {
          if (config.responseType !== 'json') {
            throw e;
          }
        }
      }

      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', config.onDownloadProgress);
      }

      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', config.onUploadProgress);
      }

      if (config.cancelToken) {
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }

          request.abort();
          reject(cancel);
          request = null;
        });
      }

      if (requestData === undefined) {
        requestData = null;
      }

      request.send(requestData);
    });
  };
},13,[3,14,6,17,20,21,15,22]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var createError = _$$_REQUIRE(_dependencyMap[0]);

  module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;

    if (!validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
    }
  };
},14,[15]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var enhanceError = _$$_REQUIRE(_dependencyMap[0]);

  module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
  };
},15,[16]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;

    if (code) {
      error.code = code;
    }

    error.request = request;
    error.response = response;
    error.isAxiosError = true;

    error.toJSON = function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code
      };
    };

    return error;
  };
},16,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var isAbsoluteURL = _$$_REQUIRE(_dependencyMap[0]);

  var combineURLs = _$$_REQUIRE(_dependencyMap[1]);

  module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }

    return requestedURL;
  };
},17,[18,19]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  module.exports = function isAbsoluteURL(url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };
},18,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
  };
},19,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

  module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;

    if (!headers) {
      return parsed;
    }

    utils.forEach(headers.split('\n'), function parser(line) {
      i = line.indexOf(':');
      key = utils.trim(line.substr(0, i)).toLowerCase();
      val = utils.trim(line.substr(i + 1));

      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }

        if (key === 'set-cookie') {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      }
    });
    return parsed;
  };
},20,[3]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    function resolveURL(url) {
      var href = url;

      if (msie) {
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin(requestURL) {
      var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }() : function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  }();
},21,[3]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },
      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  }() : function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() {
        return null;
      },
      remove: function remove() {}
    };
  }();
},22,[3]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  var settle = _$$_REQUIRE(_dependencyMap[1]);

  var buildFullPath = _$$_REQUIRE(_dependencyMap[2]);

  var buildURL = _$$_REQUIRE(_dependencyMap[3]);

  var http = _$$_REQUIRE(_dependencyMap[4]);

  var https = _$$_REQUIRE(_dependencyMap[5]);

  var httpFollow = _$$_REQUIRE(_dependencyMap[6]).http;

  var httpsFollow = _$$_REQUIRE(_dependencyMap[6]).https;

  var url = _$$_REQUIRE(_dependencyMap[7]);

  var zlib = _$$_REQUIRE(_dependencyMap[8]);

  var pkg = _$$_REQUIRE(_dependencyMap[9]);

  var createError = _$$_REQUIRE(_dependencyMap[10]);

  var enhanceError = _$$_REQUIRE(_dependencyMap[11]);

  var isHttps = /https:?/;

  module.exports = function httpAdapter(config) {
    return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
      var resolve = function resolve(value) {
        resolvePromise(value);
      };

      var reject = function reject(value) {
        rejectPromise(value);
      };

      var data = config.data;
      var headers = config.headers;

      if (!headers['User-Agent'] && !headers['user-agent']) {
        headers['User-Agent'] = 'axios/' + pkg.version;
      }

      if (data && !utils.isStream(data)) {
        if (Buffer.isBuffer(data)) {} else if (utils.isArrayBuffer(data)) {
          data = Buffer.from(new Uint8Array(data));
        } else if (utils.isString(data)) {
          data = Buffer.from(data, 'utf-8');
        } else {
          return reject(createError('Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream', config));
        }

        headers['Content-Length'] = data.length;
      }

      var auth = undefined;

      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password || '';
        auth = username + ':' + password;
      }

      var fullPath = buildFullPath(config.baseURL, config.url);
      var parsed = url.parse(fullPath);
      var protocol = parsed.protocol || 'http:';

      if (!auth && parsed.auth) {
        var urlAuth = parsed.auth.split(':');
        var urlUsername = urlAuth[0] || '';
        var urlPassword = urlAuth[1] || '';
        auth = urlUsername + ':' + urlPassword;
      }

      if (auth) {
        delete headers.Authorization;
      }

      var isHttpsRequest = isHttps.test(protocol);
      var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
      var options = {
        path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
        method: config.method.toUpperCase(),
        headers: headers,
        agent: agent,
        agents: {
          http: config.httpAgent,
          https: config.httpsAgent
        },
        auth: auth
      };

      if (config.socketPath) {
        options.socketPath = config.socketPath;
      } else {
        options.hostname = parsed.hostname;
        options.port = parsed.port;
      }

      var proxy = config.proxy;

      if (!proxy && proxy !== false) {
        var proxyEnv = protocol.slice(0, -1) + '_proxy';
        var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];

        if (proxyUrl) {
          var parsedProxyUrl = url.parse(proxyUrl);
          var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
          var shouldProxy = true;

          if (noProxyEnv) {
            var noProxy = noProxyEnv.split(',').map(function trim(s) {
              return s.trim();
            });
            shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
              if (!proxyElement) {
                return false;
              }

              if (proxyElement === '*') {
                return true;
              }

              if (proxyElement[0] === '.' && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                return true;
              }

              return parsed.hostname === proxyElement;
            });
          }

          if (shouldProxy) {
            proxy = {
              host: parsedProxyUrl.hostname,
              port: parsedProxyUrl.port
            };

            if (parsedProxyUrl.auth) {
              var proxyUrlAuth = parsedProxyUrl.auth.split(':');
              proxy.auth = {
                username: proxyUrlAuth[0],
                password: proxyUrlAuth[1]
              };
            }
          }
        }
      }

      if (proxy) {
        options.hostname = proxy.host;
        options.host = proxy.host;
        options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
        options.port = proxy.port;
        options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

        if (proxy.auth) {
          var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
          options.headers['Proxy-Authorization'] = 'Basic ' + base64;
        }
      }

      var transport;
      var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);

      if (config.transport) {
        transport = config.transport;
      } else if (config.maxRedirects === 0) {
        transport = isHttpsProxy ? https : http;
      } else {
        if (config.maxRedirects) {
          options.maxRedirects = config.maxRedirects;
        }

        transport = isHttpsProxy ? httpsFollow : httpFollow;
      }

      if (config.maxContentLength && config.maxContentLength > -1) {
        options.maxBodyLength = config.maxContentLength;
      }

      var req = transport.request(options, function handleResponse(res) {
        if (req.aborted) return;
        var stream = res;

        switch (res.headers['content-encoding']) {
          case 'gzip':
          case 'compress':
          case 'deflate':
            stream = res.statusCode === 204 ? stream : stream.pipe(zlib.createUnzip());
            delete res.headers['content-encoding'];
            break;
        }

        var lastRequest = res.req || req;
        var response = {
          status: res.statusCode,
          statusText: res.statusMessage,
          headers: res.headers,
          config: config,
          request: lastRequest
        };

        if (config.responseType === 'stream') {
          response.data = stream;
          settle(resolve, reject, response);
        } else {
          var responseBuffer = [];
          stream.on('data', function handleStreamData(chunk) {
            responseBuffer.push(chunk);

            if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
              stream.destroy();
              reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded', config, null, lastRequest));
            }
          });
          stream.on('error', function handleStreamError(err) {
            if (req.aborted) return;
            reject(enhanceError(err, config, null, lastRequest));
          });
          stream.on('end', function handleStreamEnd() {
            var responseData = Buffer.concat(responseBuffer);

            if (config.responseType !== 'arraybuffer') {
              responseData = responseData.toString(config.responseEncoding);
            }

            response.data = responseData;
            settle(resolve, reject, response);
          });
        }
      });
      req.on('error', function handleRequestError(err) {
        if (req.aborted) return;
        reject(enhanceError(err, config, null, req));
      });

      if (config.timeout) {
        req.setTimeout(config.timeout, function handleRequestTimeout() {
          req.abort();
          reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
        });
      }

      if (config.cancelToken) {
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (req.aborted) return;
          req.abort();
          reject(cancel);
        });
      }

      if (utils.isStream(data)) {
        data.on('error', function handleStreamError(err) {
          reject(enhanceError(err, config, null, req));
        }).pipe(req);
      } else {
        req.end(data);
      }
    });
  };
},23,[3,14,17,6,24,25,26,27,40,41,15,16]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  module.exports = LiquidCore.require('http');
},24,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  module.exports = LiquidCore.require('https');
},25,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  var url = _$$_REQUIRE(_dependencyMap[0]);

  var http = _$$_REQUIRE(_dependencyMap[1]);

  var https = _$$_REQUIRE(_dependencyMap[2]);

  var assert = _$$_REQUIRE(_dependencyMap[3]);

  var Writable = _$$_REQUIRE(_dependencyMap[4]).Writable;

  var debug = _$$_REQUIRE(_dependencyMap[5])("follow-redirects");

  var SAFE_METHODS = {
    GET: true,
    HEAD: true,
    OPTIONS: true,
    TRACE: true
  };
  var eventHandlers = Object.create(null);
  ["abort", "aborted", "error", "socket", "timeout"].forEach(function (event) {
    eventHandlers[event] = function (arg) {
      this._redirectable.emit(event, arg);
    };
  });

  function RedirectableRequest(options, responseCallback) {
    Writable.call(this);
    options.headers = options.headers || {};
    this._options = options;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];

    if (options.host) {
      if (!options.hostname) {
        options.hostname = options.host;
      }

      delete options.host;
    }

    if (responseCallback) {
      this.on("response", responseCallback);
    }

    var self = this;

    this._onNativeResponse = function (response) {
      self._processResponse(response);
    };

    if (!options.pathname && options.path) {
      var searchPos = options.path.indexOf("?");

      if (searchPos < 0) {
        options.pathname = options.path;
      } else {
        options.pathname = options.path.substring(0, searchPos);
        options.search = options.path.substring(searchPos);
      }
    }

    this._performRequest();
  }

  RedirectableRequest.prototype = Object.create(Writable.prototype);

  RedirectableRequest.prototype.write = function (data, encoding, callback) {
    if (!(typeof data === "string" || typeof data === "object" && "length" in data)) {
      throw new Error("data should be a string, Buffer or Uint8Array");
    }

    if (typeof encoding === "function") {
      callback = encoding;
      encoding = null;
    }

    if (data.length === 0) {
      if (callback) {
        callback();
      }

      return;
    }

    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
      this._requestBodyLength += data.length;

      this._requestBodyBuffers.push({
        data: data,
        encoding: encoding
      });

      this._currentRequest.write(data, encoding, callback);
    } else {
        this.emit("error", new Error("Request body larger than maxBodyLength limit"));
        this.abort();
      }
  };

  RedirectableRequest.prototype.end = function (data, encoding, callback) {
    if (typeof data === "function") {
      callback = data;
      data = encoding = null;
    } else if (typeof encoding === "function") {
      callback = encoding;
      encoding = null;
    }

    var currentRequest = this._currentRequest;
    this.write(data || "", encoding, function () {
      currentRequest.end(null, null, callback);
    });
  };

  RedirectableRequest.prototype.setHeader = function (name, value) {
    this._options.headers[name] = value;

    this._currentRequest.setHeader(name, value);
  };

  RedirectableRequest.prototype.removeHeader = function (name) {
    delete this._options.headers[name];

    this._currentRequest.removeHeader(name);
  };

  ["abort", "flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive", "setTimeout"].forEach(function (method) {
    RedirectableRequest.prototype[method] = function (a, b) {
      return this._currentRequest[method](a, b);
    };
  });
  ["aborted", "connection", "socket"].forEach(function (property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
      get: function () {
        return this._currentRequest[property];
      }
    });
  });

  RedirectableRequest.prototype._performRequest = function () {
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];

    if (!nativeProtocol) {
      this.emit("error", new Error("Unsupported protocol " + protocol));
      return;
    }

    if (this._options.agents) {
      var scheme = protocol.substr(0, protocol.length - 1);
      this._options.agent = this._options.agents[scheme];
    }

    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    this._currentUrl = url.format(this._options);
    request._redirectable = this;

    for (var event in eventHandlers) {
      if (event) {
        request.on(event, eventHandlers[event]);
      }
    }

    if (this._isRedirect) {
      var i = 0;
      var buffers = this._requestBodyBuffers;

      (function writeNext() {
        if (i < buffers.length) {
          var buffer = buffers[i++];
          request.write(buffer.data, buffer.encoding, writeNext);
        } else {
          request.end();
        }
      })();
    }
  };

  RedirectableRequest.prototype._processResponse = function (response) {
    if (this._options.trackRedirects) {
      this._redirects.push({
        url: this._currentUrl,
        headers: response.headers,
        statusCode: response.statusCode
      });
    }

    var location = response.headers.location;

    if (location && this._options.followRedirects !== false && response.statusCode >= 300 && response.statusCode < 400) {
      if (++this._redirectCount > this._options.maxRedirects) {
        this.emit("error", new Error("Max redirects exceeded."));
        return;
      }

      var header;
      var headers = this._options.headers;

      if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {
        this._options.method = "GET";
        this._requestBodyBuffers = [];

        for (header in headers) {
          if (/^content-/i.test(header)) {
            delete headers[header];
          }
        }
      }

      if (!this._isRedirect) {
        for (header in headers) {
          if (/^host$/i.test(header)) {
            delete headers[header];
          }
        }
      }

      var redirectUrl = url.resolve(this._currentUrl, location);
      debug("redirecting to", redirectUrl);
      Object.assign(this._options, url.parse(redirectUrl));
      this._isRedirect = true;

      this._performRequest();

      response.destroy();
    } else {
      response.responseUrl = this._currentUrl;
      response.redirects = this._redirects;
      this.emit("response", response);
      this._requestBodyBuffers = [];
    }
  };

  function wrap(protocols) {
    var exports = {
      maxRedirects: 21,
      maxBodyLength: 10485760
    };
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function (scheme) {
      var protocol = scheme + ":";
      var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
      var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

      wrappedProtocol.request = function (options, callback) {
        if (typeof options === "string") {
          options = url.parse(options);
          options.maxRedirects = exports.maxRedirects;
        } else {
          options = Object.assign({
            protocol: protocol,
            maxRedirects: exports.maxRedirects,
            maxBodyLength: exports.maxBodyLength
          }, options);
        }

        options.nativeProtocols = nativeProtocols;
        assert.equal(options.protocol, protocol, "protocol mismatch");
        debug("options", options);
        return new RedirectableRequest(options, callback);
      };

      wrappedProtocol.get = function (options, callback) {
        var request = wrappedProtocol.request(options, callback);
        request.end();
        return request;
      };
    });
    return exports;
  }

  module.exports = wrap({
    http: http,
    https: https
  });
  module.exports.wrap = wrap;
},26,[27,24,25,28,29,30]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  module.exports = LiquidCore.require('url');
},27,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  module.exports = LiquidCore.require('assert');
},28,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  module.exports = LiquidCore.require('stream');
},29,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  if (typeof process === 'undefined' || process.type === 'renderer') {
    module.exports = _$$_REQUIRE(_dependencyMap[0]);
  } else {
    module.exports = _$$_REQUIRE(_dependencyMap[1]);
  }
},30,[31,34]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  exports = module.exports = _$$_REQUIRE(_dependencyMap[0]);
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
  exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

  function useColors() {
    if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
      return true;
    }

    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    }

    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }

  exports.formatters.j = function (v) {
    try {
      return JSON.stringify(v);
    } catch (err) {
      return '[UnexpectedJSONParseError]: ' + err.message;
    }
  };

  function formatArgs(args) {
    var useColors = this.useColors;
    args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
    if (!useColors) return;
    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function (match) {
      if ('%%' === match) return;
      index++;

      if ('%c' === match) {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }

  function log() {
    return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }

  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem('debug');
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {}
  }

  function load() {
    var r;

    try {
      r = exports.storage.debug;
    } catch (e) {}

    if (!r && typeof process !== 'undefined' && 'env' in process) {
      r = process.env.DEBUG;
    }

    return r;
  }

  exports.enable(load());

  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {}
  }
},31,[32]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = _$$_REQUIRE(_dependencyMap[0]);
  exports.instances = [];
  exports.names = [];
  exports.skips = [];
  exports.formatters = {};

  function selectColor(namespace) {
    var hash = 0,
        i;

    for (i in namespace) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0;
    }

    return exports.colors[Math.abs(hash) % exports.colors.length];
  }

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      if (!debug.enabled) return;
      var self = debug;
      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      var args = new Array(arguments.length);

      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }

      args[0] = exports.coerce(args[0]);

      if ('string' !== typeof args[0]) {
        args.unshift('%O');
      }

      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        if (match === '%%') return match;
        index++;
        var formatter = exports.formatters[format];

        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val);
          args.splice(index, 1);
          index--;
        }

        return match;
      });
      exports.formatArgs.call(self, args);
      var logFn = debug.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = exports.enabled(namespace);
    debug.useColors = exports.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;

    if ('function' === typeof exports.init) {
      exports.init(debug);
    }

    exports.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = exports.instances.indexOf(this);

    if (index !== -1) {
      exports.instances.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  function enable(namespaces) {
    exports.save(namespaces);
    exports.names = [];
    exports.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) continue;
      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < exports.instances.length; i++) {
      var instance = exports.instances[i];
      instance.enabled = exports.enabled(instance.namespace);
    }
  }

  function disable() {
    exports.enable('');
  }

  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i, len;

    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }

  function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
  }
},32,[33]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  var s = 1000;
  var m = 60000;
  var h = 3600000;
  var d = 86400000;
  var y = 31557600000;

  module.exports = function (val, options) {
    options = options || {};
    var type = typeof val;

    if (type === 'string' && val.length > 0) {
      return parse(val);
    } else if (type === 'number' && isNaN(val) === false) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }

    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
  };

  function parse(str) {
    str = String(str);

    if (str.length > 100) {
      return;
    }

    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

    if (!match) {
      return;
    }

    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();

    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y;

      case 'days':
      case 'day':
      case 'd':
        return n * d;

      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h;

      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m;

      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s;

      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n;

      default:
        return undefined;
    }
  }

  function fmtShort(ms) {
    if (ms >= d) {
      return Math.round(ms / d) + 'd';
    }

    if (ms >= h) {
      return Math.round(ms / h) + 'h';
    }

    if (ms >= m) {
      return Math.round(ms / m) + 'm';
    }

    if (ms >= s) {
      return Math.round(ms / s) + 's';
    }

    return ms + 'ms';
  }

  function fmtLong(ms) {
    return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
  }

  function plural(ms, n, name) {
    if (ms < n) {
      return;
    }

    if (ms < n * 1.5) {
      return Math.floor(ms / n) + ' ' + name;
    }

    return Math.ceil(ms / n) + ' ' + name + 's';
  }
},33,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  var tty = _$$_REQUIRE(_dependencyMap[0]);

  var util = _$$_REQUIRE(_dependencyMap[1]);

  exports = module.exports = _$$_REQUIRE(_dependencyMap[2]);
  exports.init = init;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.colors = [6, 2, 3, 4, 5, 1];

  try {
    var supportsColor = _$$_REQUIRE(_dependencyMap[3]);

    if (supportsColor && supportsColor.level >= 2) {
      exports.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221];
    }
  } catch (err) {}

  exports.inspectOpts = Object.keys(process.env).filter(function (key) {
    return /^debug_/i.test(key);
  }).reduce(function (obj, key) {
    var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
      return k.toUpperCase();
    });
    var val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) val = true;else if (/^(no|off|false|disabled)$/i.test(val)) val = false;else if (val === 'null') val = null;else val = Number(val);
    obj[prop] = val;
    return obj;
  }, {});

  function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
  }

  exports.formatters.o = function (v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map(function (str) {
      return str.trim();
    }).join(' ');
  };

  exports.formatters.O = function (v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
  };

  function formatArgs(args) {
    var name = this.namespace;
    var useColors = this.useColors;

    if (useColors) {
      var c = this.color;
      var colorCode = '\u001b[3' + (c < 8 ? c : '8;5;' + c);
      var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\u001b[0m';
      args[0] = prefix + args[0].split('\n').join('\n' + prefix);
      args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
    } else {
      args[0] = getDate() + name + ' ' + args[0];
    }
  }

  function getDate() {
    if (exports.inspectOpts.hideDate) {
      return '';
    } else {
      return new Date().toISOString() + ' ';
    }
  }

  function log() {
    return process.stderr.write(util.format.apply(util, arguments) + '\n');
  }

  function save(namespaces) {
    if (null == namespaces) {
      delete process.env.DEBUG;
    } else {
      process.env.DEBUG = namespaces;
    }
  }

  function load() {
    return process.env.DEBUG;
  }

  function init(debug) {
    debug.inspectOpts = {};
    var keys = Object.keys(exports.inspectOpts);

    for (var i = 0; i < keys.length; i++) {
      debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
  }

  exports.enable(load());
},34,[35,36,32,37]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  module.exports = LiquidCore.require('tty');
},35,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  module.exports = LiquidCore.require('util');
},36,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  const os = _$$_REQUIRE(_dependencyMap[0]);

  const hasFlag = _$$_REQUIRE(_dependencyMap[1]);

  const env = process.env;
  let forceColor;

  if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
    forceColor = false;
  } else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = true;
  }

  if ('FORCE_COLOR' in env) {
    forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
  }

  function translateLevel(level) {
    if (level === 0) {
      return false;
    }

    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  }

  function supportsColor(stream) {
    if (forceColor === false) {
      return 0;
    }

    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
      return 3;
    }

    if (hasFlag('color=256')) {
      return 2;
    }

    if (stream && !stream.isTTY && forceColor !== true) {
      return 0;
    }

    const min = forceColor ? 1 : 0;

    if (process.platform === 'win32') {
      const osRelease = os.release().split('.');

      if (Number(process.versions.node.split('.')[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }

      return 1;
    }

    if ('CI' in env) {
      if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
        return 1;
      }

      return min;
    }

    if ('TEAMCITY_VERSION' in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }

    if (env.COLORTERM === 'truecolor') {
      return 3;
    }

    if ('TERM_PROGRAM' in env) {
      const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

      switch (env.TERM_PROGRAM) {
        case 'iTerm.app':
          return version >= 3 ? 3 : 2;

        case 'Apple_Terminal':
          return 2;
      }
    }

    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }

    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }

    if ('COLORTERM' in env) {
      return 1;
    }

    if (env.TERM === 'dumb') {
      return min;
    }

    return min;
  }

  function getSupportLevel(stream) {
    const level = supportsColor(stream);
    return translateLevel(level);
  }

  module.exports = {
    supportsColor: getSupportLevel,
    stdout: getSupportLevel(process.stdout),
    stderr: getSupportLevel(process.stderr)
  };
},37,[38,39]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  module.exports = LiquidCore.require('os');
},38,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  module.exports = (flag, argv) => {
    argv = argv || process.argv;
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const pos = argv.indexOf(prefix + flag);
    const terminatorPos = argv.indexOf('--');
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
  };
},39,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  "use strict";

  module.exports = LiquidCore.require('zlib');
},40,[]);
__d(function(global, require, _aUnused, _bUnused, module, exports, _cUnused) {
  module.exports = {
  "_from": "axios",
  "_id": "axios@0.19.2",
  "_inBundle": false,
  "_integrity": "sha512-fjgm5MvRHLhx+osE2xoekY70AhARk3a6hkN+3Io1jc00jtquGvxYlKlsFUhmUET0V5te6CcZI7lcv2Ym61mjHA==",
  "_location": "/axios",
  "_phantomChildren": {},
  "_requested": {
    "type": "tag",
    "registry": true,
    "raw": "axios",
    "name": "axios",
    "escapedName": "axios",
    "rawSpec": "",
    "saveSpec": null,
    "fetchSpec": "latest"
  },
  "_requiredBy": [
    "#USER",
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/axios/-/axios-0.19.2.tgz",
  "_shasum": "3ea36c5d8818d0d5f8a8a97a6d36b86cdc00cb27",
  "_spec": "axios",
  "_where": "/Users/tthieu/Documents/001_Work/001_Repo/fossil-ble-sdk-android_01",
  "author": {
    "name": "Matt Zabriskie"
  },
  "browser": {
    "./lib/adapters/http.js": "./lib/adapters/xhr.js"
  },
  "bugs": {
    "url": "https://github.com/axios/axios/issues"
  },
  "bundleDependencies": false,
  "bundlesize": [
    {
      "path": "./dist/axios.min.js",
      "threshold": "5kB"
    }
  ],
  "dependencies": {
    "follow-redirects": "1.5.10"
  },
  "deprecated": false,
  "description": "Promise based HTTP client for the browser and node.js",
  "devDependencies": {
    "bundlesize": "^0.17.0",
    "coveralls": "^3.0.0",
    "es6-promise": "^4.2.4",
    "grunt": "^1.0.2",
    "grunt-banner": "^0.6.0",
    "grunt-cli": "^1.2.0",
    "grunt-contrib-clean": "^1.1.0",
    "grunt-contrib-watch": "^1.0.0",
    "grunt-eslint": "^20.1.0",
    "grunt-karma": "^2.0.0",
    "grunt-mocha-test": "^0.13.3",
    "grunt-ts": "^6.0.0-beta.19",
    "grunt-webpack": "^1.0.18",
    "istanbul-instrumenter-loader": "^1.0.0",
    "jasmine-core": "^2.4.1",
    "karma": "^1.3.0",
    "karma-chrome-launcher": "^2.2.0",
    "karma-coverage": "^1.1.1",
    "karma-firefox-launcher": "^1.1.0",
    "karma-jasmine": "^1.1.1",
    "karma-jasmine-ajax": "^0.1.13",
    "karma-opera-launcher": "^1.0.0",
    "karma-safari-launcher": "^1.0.0",
    "karma-sauce-launcher": "^1.2.0",
    "karma-sinon": "^1.0.5",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-webpack": "^1.7.0",
    "load-grunt-tasks": "^3.5.2",
    "minimist": "^1.2.0",
    "mocha": "^5.2.0",
    "sinon": "^4.5.0",
    "typescript": "^2.8.1",
    "url-search-params": "^0.10.0",
    "webpack": "^1.13.1",
    "webpack-dev-server": "^1.14.1"
  },
  "homepage": "https://github.com/axios/axios",
  "keywords": [
    "xhr",
    "http",
    "ajax",
    "promise",
    "node"
  ],
  "license": "MIT",
  "main": "index.js",
  "name": "axios",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/axios/axios.git"
  },
  "scripts": {
    "build": "NODE_ENV=production grunt build",
    "coveralls": "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
    "examples": "node ./examples/server.js",
    "fix": "eslint --fix lib/**/*.js",
    "postversion": "git push && git push --tags",
    "preversion": "npm test",
    "start": "node ./sandbox/server.js",
    "test": "grunt test && bundlesize",
    "version": "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
  },
  "typings": "./index.d.ts",
  "version": "0.19.2"
}
;
},41,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var utils = _$$_REQUIRE(_dependencyMap[0]);

  module.exports = function mergeConfig(config1, config2) {
    config2 = config2 || {};
    var config = {};
    var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
    var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
    var defaultToConfig2Keys = ['baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'];
    utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
      if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      }
    });
    utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
      if (utils.isObject(config2[prop])) {
        config[prop] = utils.deepMerge(config1[prop], config2[prop]);
      } else if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      } else if (utils.isObject(config1[prop])) {
        config[prop] = utils.deepMerge(config1[prop]);
      } else if (typeof config1[prop] !== 'undefined') {
        config[prop] = config1[prop];
      }
    });
    utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
      if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      } else if (typeof config1[prop] !== 'undefined') {
        config[prop] = config1[prop];
      }
    });
    var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys);
    var otherKeys = Object.keys(config2).filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });
    utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
      if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      } else if (typeof config1[prop] !== 'undefined') {
        config[prop] = config1[prop];
      }
    });
    return config;
  };
},42,[3]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  function Cancel(message) {
    this.message = message;
  }

  Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };

  Cancel.prototype.__CANCEL__ = true;
  module.exports = Cancel;
},43,[]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  var Cancel = _$$_REQUIRE(_dependencyMap[0]);

  function CancelToken(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        return;
      }

      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }

  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };

  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel
    };
  };

  module.exports = CancelToken;
},44,[43]);
__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  'use strict';

  module.exports = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };
},45,[]);
__r(0);