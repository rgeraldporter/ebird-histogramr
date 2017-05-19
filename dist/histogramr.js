!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in g||(g[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==m.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=g[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(m.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=g[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return D[e]||(D[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=g[s],f=D[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=v(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=g[e];if(t)t.declarative?p(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=v(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=g[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(e){var r={};if("object"==typeof e||"function"==typeof e){var t=e&&e.hasOwnProperty;if(h)for(var n in e)f(r,e,n)||c(r,e,n,t);else for(var n in e)c(r,e,n,t)}return r["default"]=e,y(r,"__useDefault",{value:!0}),r}function c(e,r,t,n){(!n||r.hasOwnProperty(t))&&(e[t]=r[t])}function f(e,r,t){try{var n;return(n=Object.getOwnPropertyDescriptor(r,t))&&y(e,t,n),!0}catch(o){return!1}}function p(r,t){var n=g[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==m.call(t,u)&&(g[u]?p(u,t):v(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function v(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return _(e.substr(6));var r=g[e];if(!r)throw"Module "+e+" not present.";return a(e),p(e,[]),g[e]=void 0,r.declarative&&y(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var g={},m=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},h=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(x){h=!1}var y;!function(){try{Object.defineProperty({},"a",{})&&(y=Object.defineProperty)}catch(e){y=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var D={},_="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:_,register:r,registerDynamic:t,get:v,set:function(e,r){I[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[d],arguments[d]);o(u);var i=v(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)v(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var Maybe = function() {
    function Maybe(x) {
      _classCallCheck(this, Maybe);
      this.__value = x;
    }
    _createClass(Maybe, [{
      key: "map",
      value: function map(f) {
        return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
      }
    }, {
      key: "isNothing",
      value: function isNothing() {
        return this.__value === null || this.__value === undefined;
      }
    }, {
      key: "join",
      value: function join() {
        return this.isNothing() ? Maybe.of(null) : this.__value;
      }
    }, {
      key: "emit",
      value: function emit() {
        return this.__value;
      }
    }]);
    return Maybe;
  }();
  Maybe.of = function(x) {
    return new Maybe(x);
  };
  exports.default = Maybe;
  return module.exports;
});

$__System.registerDynamic("3", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  function toCsvValue(theValue, sDelimiter) {
    var t = typeof theValue === "undefined" ? "undefined" : _typeof(theValue);
    var output = void 0,
        stringDelimiter = void 0;
    if (typeof sDelimiter === "undefined" || sDelimiter === null)
      stringDelimiter = '"';
    else
      stringDelimiter = sDelimiter;
    if (t === "undefined" || t === null)
      output = '';
    else if (t === 'string')
      output = sDelimiter + theValue + sDelimiter;
    else
      output = String(theValue);
    return output;
  }
  function toCsv(objArray, sDelimiter, cDelimiter) {
    var i = void 0,
        l = void 0,
        names = [],
        name = void 0,
        value = void 0,
        obj = void 0,
        row = void 0,
        output = "",
        n = void 0,
        nl = void 0;
    if (typeof sDelimiter === "undefined" || sDelimiter === null) {
      sDelimiter = '"';
    }
    if (typeof cDelimiter === "undefined" || cDelimiter === null) {
      cDelimiter = ",";
    }
    for (i = 0, l = objArray.length; i < l; i += 1) {
      obj = objArray[i];
      row = "";
      if (i === 0) {
        for (name in obj) {
          if (obj.hasOwnProperty(name)) {
            names.push(name);
            row += [sDelimiter, name, sDelimiter, cDelimiter].join("");
          }
        }
        row = row.substring(0, row.length - 1);
        output += row;
      }
      output += "\n";
      row = "";
      for (n = 0, nl = names.length; n < nl; n += 1) {
        name = names[n];
        value = obj[name];
        if (n > 0) {
          row += ",";
        }
        row += toCsvValue(value, '"');
      }
      output += row;
    }
    return output;
  }
  exports.default = toCsv;
  return module.exports;
});

$__System.registerDynamic("1", ["2", "3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = undefined;
  var _Maybe = $__require('2');
  var _Maybe2 = _interopRequireDefault(_Maybe);
  var _csv = $__require('3');
  var _csv2 = _interopRequireDefault(_csv);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0,
          arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  var memoize = function memoize(fn) {
    var cache = {};
    return function() {
      for (var _len = arguments.length,
          args = Array(_len),
          _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var stringifiedArgs = JSON.stringify(args);
      var result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn.apply(undefined, args);
      return result;
    };
  };
  function parseChartColumns(arr) {
    var obj = {};
    Object.keys(monthOfTheYear()).forEach(function(key) {
      obj[key] = monthOfTheYear()[key].map(function(val) {
        return Number(arr[val]);
      });
    });
    return obj;
  }
  function getTaxaList(arr) {
    var startLine = 16;
    return arr.reduce(function(prev, current, index) {
      if (index < startLine)
        return prev;
      var tabs = current.split(/\t/);
      var species = tabs[0].split('(')[0].trim();
      if (tabs.length)
        prev[species] = parseChartColumns(tabs);
      return prev;
    }, {});
  }
  var _monthOfTheYear = function _monthOfTheYear() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.reduce(function(prev, current, index) {
      var oneIndex = (index + 1) * 4;
      prev[current] = [oneIndex - 3, oneIndex - 2, oneIndex - 1, oneIndex];
      return prev;
    }, {});
  };
  var monthOfTheYear = memoize(_monthOfTheYear);
  function getTaxa(arr) {
    var position = 11;
    return Number(arr[position].split(/\t/)[1]);
  }
  function getSampleSize(arr) {
    var position = 14;
    return parseChartColumns(arr[position].split(/\t/));
  }
  function sampleToCsv(val) {
    var sample = ["Sample Size"];
    Object.keys(val).forEach(function(key) {
      sample.push.apply(sample, _toConsumableArray(val[key]));
    });
    return (0, _csv2.default)([sample]).split(/\n/).slice(1);
  }
  function taxaToCsv(val) {
    var arr = [];
    Object.keys(val).forEach(function(key) {
      var obj = {};
      obj.name = key;
      Object.keys(val[key]).forEach(function(val2) {
        obj[val2 + '_1'] = val[key][val2][0];
        obj[val2 + '_2'] = val[key][val2][1];
        obj[val2 + '_3'] = val[key][val2][2];
        obj[val2 + '_4'] = val[key][val2][3];
      });
      arr.push(obj);
    });
    arr.pop();
    return (0, _csv2.default)(arr);
  }
  function processFile(str) {
    var lines = str.split(/\n/);
    return _Maybe2.default.of({
      sampleSize: getSampleSize(lines),
      taxaCount: getTaxa(lines),
      taxaList: getTaxaList(lines),
      get taxaCsv() {
        return taxaToCsv(this.taxaList);
      },
      get allCsv() {
        return sampleToCsv(this.sampleSize) + '\n' + this.taxaCsv;
      }
    });
  }
  exports.default = processFile;
  return module.exports;
});

})
(function(factory) {
  factory();
});
//# sourceMappingURL=histogramr.js.map
