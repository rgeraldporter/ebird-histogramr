import histogramr from './index';
import fs from 'fs';

describe('the histogramr', () => {

    it('can read a bar chart', () => {

        const file = fs.readFileSync('src/example.BarChart.txt', 'utf8');
        const histogram = histogramr(file);

        expect(histogram.emit().sampleSize.January[3]).toBe(5);
        expect(histogram.emit().taxaCount).toBe(167);
        expect(histogram.emit().taxaList['Canada Goose'].January[0]).toBe(0.25);
        expect(histogram.emit().taxaList['Canada Goose'].December[3]).toBe(0.25);
        expect(histogram.emit().taxaList['House Sparrow'].January[3]).toBe(0.3333333333333333);
    });
});