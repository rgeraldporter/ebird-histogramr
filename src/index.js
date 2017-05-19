import Maybe from './lib/Maybe';
import toCsv from './lib/csv';

const memoize = fn => {

    const cache = {};
    return (...args) => {
        const stringifiedArgs = JSON.stringify(args);
        const result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args);
        return result;
    };
};

function parseChartColumns(arr) {

    const obj = {};

    Object.keys(monthOfTheYear()).forEach((key) => {

        obj[key] = monthOfTheYear()[key].map((val) => {

            return Number(arr[val]);
        });
    });

    return obj;
}

function getTaxaList(arr) {

    const startLine = 16;

    return arr.reduce((prev, current, index) => {

        if (index < startLine)
            return prev;

        const tabs = current.split(/\t/);
        const species = tabs[0].split('(')[0].trim();

        if (tabs.length)
            prev[species] = parseChartColumns(tabs);

        return prev;
    }, {});
}

const _monthOfTheYear = () => {

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return months.reduce((prev, current, index) => {

        const oneIndex = ((index+1) * 4);

        prev[current] = [oneIndex - 3, oneIndex - 2, oneIndex - 1, oneIndex];

        return prev;
    }, {});
}
const monthOfTheYear = memoize(_monthOfTheYear);

function getTaxa(arr) {

    const position = 11;

    return Number(arr[position].split(/\t/)[1]);
}

function getSampleSize(arr) {

    const position = 14;

    return parseChartColumns(arr[position].split(/\t/));
}

function sampleToCsv(val) {

    const sample = ["Sample Size"];

    Object.keys(val).forEach(key => {

        sample.push(...val[key]);
    });

    return toCsv([sample]).split(/\n/).slice(1);
}

function taxaToCsv(val) {

    const arr = [];

    Object.keys(val).forEach(key => {

        const obj = {};

        obj.name = key;

        Object.keys(val[key]).forEach(val2 => {

            obj[val2+'_1'] = val[key][val2][0];
            obj[val2+'_2'] = val[key][val2][1];
            obj[val2+'_3'] = val[key][val2][2];
            obj[val2+'_4'] = val[key][val2][3];
        });

        arr.push(obj);
    });

    arr.pop();

    return toCsv(arr);
}

function processFile(str) {

    const lines = str.split(/\n/);

    return Maybe.of({
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

export {processFile as default};
