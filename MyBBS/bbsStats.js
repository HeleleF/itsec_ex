const MyBigInt = require('../MyBigInt/mybigint.js');
const MyBBS = require('./mybbs.js');

const FIRST_ITERATION = 20000;
const SECOND_ITERATION = 1000000;

console.debug(`Creating bbs generator...`)
const bbs = new MyBBS({s: 64});

const occ8 = new Uint8Array(256);
const g8 = bbs.randomBitStream(8);

console.debug(`Creating ${FIRST_ITERATION} 8bit values...`)
for (let k = FIRST_ITERATION; k--;) {
    const i = g8.next().value;
    occ8[i]++;
}

const occMin = Math.min(...occ8);
const occMax = Math.max(...occ8);
const avg = occ8.reduce((a, b) => a + b, 0) / 256;
const stdev = Math.sqrt(occ8.map(x => Math.pow(x - avg, 2)).reduce((a,b) => a + b) / 256);

console.debug(`MIN: ${occMin} - MAX: ${occMax} - AVG: ${avg} - STDEV: ${stdev}`);
/*
const occ16 = new Uint16Array(65536);
const g16 = bbs.randomBitStream(16);

console.debug(`Creating ${SECOND_ITERATION} 16bit values...`)
for (let k = SECOND_ITERATION; k--;) {
    const i = g16.next().value;
    occ16[i]++;
}

const occ16Min = Math.min(...occ16);
const occ16Max = Math.max(...occ16);
const avg16 = occ16.reduce((a, b) => a + b, 0) / 256;
const stdev16 = Math.sqrt(occ16.map(x => Math.pow(x - avg, 2)).reduce((a,b) => a + b) / 256);

console.debug(`MIN: ${occ16Min} - MAX: ${occ16Max} - AVG: ${avg16} - STDEV: ${stdev16}`);
*/