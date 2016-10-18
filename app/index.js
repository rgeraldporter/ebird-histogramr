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

    var startLine = 15;

    return arr.reduce(function (prev, current, index) {

        if (index < startLine) return prev;

        var tabs = current.split(/\t/);

        if (tabs.length) prev[tabs[0]] = parseChartColumns(tabs);

        return prev;
    }, {});
}

var _monthOfTheYear = function _monthOfTheYear() {

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'];

    return months.reduce(function (prev, current, index) {

        var oneIndex = (index + 1) * 4;

        prev[current] = [oneIndex - 3, oneIndex - 2, oneIndex - 1, oneIndex];

        return prev;
    }, {});
};
var monthOfTheYear = memoize(_monthOfTheYear);

function getTaxa(arr) {

    var position = 10;

    return Number(arr[position].split(/\t/)[1]);
}

function getSampleSize(arr) {

    var position = 13;

    return parseChartColumns(arr[position].split(/\t/).slice(1));
}

function taxaToCsv(val) {

    var arr = [];

    Object.keys(val).forEach(function (key) {

        var obj = {};

        obj.name = key;

        Object.keys(val[key]).forEach(function (val2, index) {

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
        get csv() {

            return taxaToCsv(this.taxaList);
        }
    });
}

exports.default = processFile;