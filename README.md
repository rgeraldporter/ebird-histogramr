# eBird Histogram Reader (ebird-histogramr)
#### v1.1.0

A module for parsing eBird ["BarChart" histogram files](http://help.ebird.org/customer/portal/articles/1010553-understanding-the-ebird-bar-charts).

[![Build Status](https://travis-ci.org/rgeraldporter/ebird-histogramr.svg?branch=master)](https://travis-ci.org/rgeraldporter/ebird-histogramr)

## Setup and Usage

Easy to set up, either include the `/dist/histogramr.min.js` in your web application, or for a node.js application:

```
npm install ebird-histogramr
```

... then include as an `import` or `require()` depending on your JavaScript version setup.

For example, here's how the unit test uses it:

```
import histogramr from 'ebird-histogramr';

const file = fs.readFileSync('src/example.BarChart.txt', 'utf8');
const histogram = histogramr(file);

expect(histogram.emit().sampleSize.January[3]).toBe(7); // sample size in 4th quarter of Jan is 6.0
expect(histogram.emit().taxaCount).toBe(169); // 169 is the total taxa count 

// First quarter of January sees a 50% occcurrence of Canada Goose
expect(histogram.emit().taxaList['Canada Goose'].January[0]).toBe(0.5);

// The 4th quarter of December has a 14.285% occurrence
expect(histogram.emit().taxaList['Canada Goose'].December[3]).toBe(0.14285714285714285);

// 4th quarter of January see a 28.571% occurrence of House Sparrow:
expect(histogram.emit().taxaList['House Sparrow'].January[3]).toBe(0.2857142857142857);
```

## About eBird

eBird is a real-time, online bird checklist resource by the Cornell Lab of Ornithology. For more information, see http://help.ebird.org/.

## Version history

### v1.1

Updated parser to work correctly with changes eBird made to the histogram.

### v1.0

Initial release

## License

The MIT License (MIT)

Copyright (c) 2016-2017 Robert Gerald Porter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
