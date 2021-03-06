'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _Maybe = require('./lib/Maybe');

var _Maybe2 = _interopRequireDefault(_Maybe);

var _csv = require('./lib/csv');

var _csv2 = _interopRequireDefault(_csv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var memoize = function memoize(fn) {

    var cache = {};
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var stringifiedArgs = JSON.stringify(args);
        var result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn.apply(undefined, args);
        return result;
    };
};

function parseChartColumns(arr) {

    var obj = {};

    Object.keys(monthOfTheYear()).forEach(function (key) {

        obj[key] = monthOfTheYear()[key].map(function (val) {

            return Number(arr[val]);
        });
    });

    return obj;
}

function getTaxaList(arr) {

    var startLine = 16;

    return arr.reduce(function (prev, current, index) {

        if (index < startLine) return prev;

        var tabs = current.split(/\t/);
        var species = tabs[0].split('(')[0].trim();

        if (tabs.length) prev[species] = parseChartColumns(tabs);

        return prev;
    }, {});
}

var _monthOfTheYear = function _monthOfTheYear() {

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return months.reduce(function (prev, current, index) {

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

    Object.keys(val).forEach(function (key) {

        sample.push.apply(sample, _toConsumableArray(val[key]));
    });

    return (0, _csv2.default)([sample]).split(/\n/).slice(1);
}

function taxaToCsv(val) {

    var arr = [];

    Object.keys(val).forEach(function (key) {

        var obj = {};

        obj.name = key;

        Object.keys(val[key]).forEach(function (val2) {

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