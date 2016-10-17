import Maybe from './lib/Maybe';

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

    const startLine = 15;

    return arr.reduce((prev, current, index) => {

        if (index < startLine)
            return prev;

        const tabs = current.split(/\t/);

        if (tabs.length)
            prev[tabs[0]] = parseChartColumns(tabs);

        return prev;
    }, {});
}

const _monthOfTheYear = () => {

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'Novermber', 'December'
    ];

    return months.reduce((prev, current, index) => {

        const oneIndex = ((index+1) * 4);

        prev[current] = [oneIndex - 3, oneIndex - 2, oneIndex - 1, oneIndex];

        return prev;
    }, {});
}
const monthOfTheYear = memoize(_monthOfTheYear);

function getTaxa(arr) {

    const TAXA = 10;

    return Number(arr[TAXA].split(/\t/)[1]);
}

function getSampleSize(arr) {

    const SAMPLE_SIZE = 13;

    return parseChartColumns(arr[SAMPLE_SIZE].split(/\t/).slice(1));
}

function processFile(str) {

    const lines = str.split(/\n/);

    return Maybe.of({
        sampleSize: getSampleSize(lines),
        taxaCount: getTaxa(lines),
        taxaList: getTaxaList(lines)
    });
}

export {processFile as default};
