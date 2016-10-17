'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('the histogramr', function () {

    it('can read a bar chart', function () {

        var file = _fs2.default.readFileSync('src/example.BarChart.txt', 'utf8');
        var histogram = (0, _index2.default)(file);

        expect(histogram.emit().sampleSize.January[3]).toBe(5);
        expect(histogram.emit().taxaCount).toBe(167);
        expect(histogram.emit().taxaList['Canada Goose'].January[0]).toBe(0.25);
        expect(histogram.emit().taxaList['Canada Goose'].December[3]).toBe(0.25);
        expect(histogram.emit().taxaList['House Sparrow'].January[3]).toBe(0.3333333333333333);
    });
});