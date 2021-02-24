const MyBigInt = require('./mybigint.js');

/**
 * Performs miller rabin tests.
 * @param {MyBigInt} big The value to test.
 * @returns {number | true} The round number in which a witness was found, or true if prime.
 */
const testPrimeMR = big => {

    const p = big.copy();

    const lo = MyBigInt.TWO();
    const hi = p._sub(lo, true);

    // test with small primes first
    const primbases = MyBigInt.PRIMES_TO_38();

    let i = 0;

    for (i = 0; i < primbases.length; i++) {
        if (p.witnessMR(primbases[i])) {
            return (i + 1);
        }
    }

    const bs = Array.from(Array(38), () => MyBigInt.getRandomBetween(lo, hi, true));

    for (i; i < bs.length; i++) {
        if (p.witnessMR(bs[i])) {
            return (i + 1);
        }
    }
    return true;
};

/**
 * Primes 5 to 1000 (166)(http://www.mathcoach.com/primes.html)
 * 2 and 3 excluded because they are picked up at start.
 */
const PRIM = [5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
    103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167,
    173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239,
    241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
    317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397,
    401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467,
    479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569,
    571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643,
    647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733,
    739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823,
    827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
    919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997
].map(v => MyBigInt.fromString(`${v}`));

/**
 * Pseudoprimes (https://de.wikibooks.org/wiki/Pseudoprimzahlen:_Tabelle_Pseudoprimzahlen_(15_-_4999))
 */
const PSEUDO = [
    15, 21, 25, 28, 33, 35, 39, 45, 49, 51, 52, 55, 57, 63, 65, 66, 69,
    70, 75, 76, 77, 85, 87, 91, 93, 95, 99, 105, 111, 112, 115, 117, 119,
    121, 123, 124, 125, 129, 130, 133, 135, 141, 143, 145, 147, 148, 153,
    154, 155, 159, 161, 165, 169, 171, 172, 175, 176, 177, 183, 185, 186,
    187, 189, 190, 195, 196, 201, 203, 205, 207, 208, 209, 213, 215, 217,
    219, 221, 225, 231, 232, 235, 237, 238, 244, 245, 246, 247, 249, 253,
    255, 259, 261, 265, 267, 268, 273, 275, 276, 279, 280, 285, 286, 287,
    289, 291, 292, 295, 297, 299, 301, 303, 304, 305, 309, 310, 315, 316,
    319, 321, 322, 323, 325, 327, 329, 333, 335, 339, 341, 343, 344, 345,
    351, 355, 357, 361, 363, 364, 365, 366, 369, 370, 371, 375, 377, 381,
    385, 387, 388, 391, 393, 395, 396, 399, 403, 405, 406, 407, 411, 412,
    413, 415, 417, 418, 423, 425, 426, 427, 429, 430
].map(v => MyBigInt.fromString(`${v}`));

/**
 * composite numbers (http://www.wikiprimes.com/composite-number-list/)
 */
const COMPOSITE = [
    9, 27, 243, 290, 294, 296, 298, 302, 306, 332, 334, 336, 338, 342, 346,
    348, 350, 352, 354, 356, 435, 511, 512, 513, 514, 515, 516, 517, 518, 519,
    520, 522, 524, 715, 716, 717, 718, 720, 721, 722, 723, 724, 725, 726, 728,
    729, 730, 731, 732, 734, 735, 736, 737, 738, 740, 741, 742, 744, 745, 746,
    747, 748, 749, 752, 753, 754, 755, 756, 758, 759, 760, 762, 763, 764, 765,
    766, 767, 768, 770, 771, 772, 774, 775, 776, 777, 778, 779, 780, 781, 782,
    783, 784, 785, 786, 872, 873, 874, 875, 876, 878, 879, 880, 882, 884, 885,
    886, 888, 889, 890, 891, 892, 893, 928, 930, 931, 932, 933, 934, 935, 936,
    938, 939, 940, 942, 943, 944, 945, 946, 948, 969, 970, 972, 973, 974, 975,
    976, 978, 979, 980, 981, 982, 984, 985, 986, 987, 999
].map(v => MyBigInt.fromString(`${v}`));

const primCount = PRIM.length;
const pseudoCount = PSEUDO.length;
const compCount = COMPOSITE.length;

console.debug(`Testing with ${primCount} primes, ${pseudoCount} pseudoprimes and ${compCount} composites...`);

const resultsPrim = [0, 0, 0];
const resultsPseudo = [0, 0, 0];
const resultsComp = [0, 0, 0];

PRIM.forEach(p => {
    if (p.isPrimeFermat()) resultsPrim[0]++;
    if (p.isPrimeEuler()) resultsPrim[1]++;
    if (p.isPrimeMR()) resultsPrim[2]++;
});

PSEUDO.forEach(p => {
    if (!p.isPrimeFermat()) resultsPseudo[0]++;
    if (!p.isPrimeEuler()) resultsPseudo[1]++;
    if (!p.isPrimeMR()) resultsPseudo[2]++;
});

COMPOSITE.forEach(c => {
    if (!c.isPrimeFermat()) resultsComp[0]++;
    if (!c.isPrimeEuler()) resultsComp[1]++;
    if (!c.isPrimeMR()) resultsComp[2]++;
});

console.group(`Fermat`);
console.debug(`Prim: ${100 * resultsPrim[0] / primCount}%, Pseudo: ${100 * resultsPseudo[0] / pseudoCount}%, Comp: ${100 * resultsComp[0] / compCount}%`);
console.debug(`Total: ${100 * (resultsPrim[0] + resultsPseudo[0] + resultsComp[0]) / (primCount + pseudoCount + compCount)}%`);
console.groupEnd();

console.group(`Euler`);
console.debug(`Prim: ${100 * resultsPrim[1] / primCount}%, Pseudo: ${100 * resultsPseudo[1] / pseudoCount}%, Comp: ${100 * resultsComp[1] / compCount}%`);
console.debug(`Total: ${100 * (resultsPrim[1] + resultsPseudo[1] + resultsComp[1]) / (primCount + pseudoCount + compCount)}%`);
console.groupEnd();

console.group(`Miller-Rabin`);
console.debug(`Prim: ${100 * resultsPrim[2] / primCount}%, Pseudo: ${100 * resultsPseudo[2] / pseudoCount}%, Comp: ${100 * resultsComp[2] / compCount}%`);
console.debug(`Total: ${100 * (resultsPrim[2] + resultsPseudo[2] + resultsComp[2]) / (primCount + pseudoCount + compCount)}%`);
console.groupEnd();

console.debug(`Testing necessary number of miller-rabin rounds...`);

// more composite numbers
const COMP2 = [4413, 4417, 4419, 4427, 4429, 4431, 4433, 4437, 4439, 4443, 4449, 4453, 4459, 4461, 4467, 4469, 4471, 4473, 4477, 4479, 4487, 4489, 4491, 4497, 4499,
    4767, 4769, 4771, 4773, 4777, 4779, 4781, 4791, 4797, 4803, 4807, 4809, 4811, 4819, 4821, 4823, 4827, 4829, 4833, 4837, 4839, 4841, 4843, 4847, 4849,
    4851, 4853, 4857, 4859, 4863, 4867, 4869, 4873, 4879, 4881, 4883, 4887, 4891, 4893, 4897, 4899, 4901, 4907, 4911, 4913, 4917, 4921, 4923, 4927, 4929,
    4939, 4941, 4947, 4949, 4953, 4959, 4961, 4963, 4971, 4977, 4979, 4981, 4983, 4989, 4991, 4997, 14981, 15751, 24211, 25351, 29539, 38081, 40501, 44801, 53971,
    79381, 74593, 79003, 82513, 87913, 88573, 97567,
    1729, 63973, 294409, 56052361, 118901521, 172947529, 216821881, 228842209, 1299963601, 2301745249, 9624742921, 11346205609, 13079177569, 21515221081,
    321197185, 5394826801, '232250619601', '9746347772161', '1436697831295441', '60977817398996785', '7156857700403137441', '1791562810662585767521'
].map(c => MyBigInt.fromString(c + ''));

const mrRounds = [0, 0, 0, 0, 0];

COMP2.forEach(c => {

    const n = testPrimeMR(c);

    if (n <= 9) mrRounds[0]++;
    else if (n <= 19) mrRounds[1]++;
    else if (n <= 29) mrRounds[2]++;
    else if (n <= 39) mrRounds[3]++;
    else mrRounds[4]++;
});

// Ergebnis: Alle Composites werden in unter 10 Runden gefunden, weil die Werte hier kleiner als 10^38 sind und MR damit deterministisch arbeitet.
// Empirisch bei BBS-Tests zu sehen: Auch für sehr große Zahlen kommt man praktisch nie über 20 Runden hinaus (die ersten 12 sind Primzahlen bis 38).
console.debug(`Found under 10: ${mrRounds[0]}\nFound under 20: ${mrRounds[1]}\nFound under 30: ${mrRounds[2]}\nFound under 40: ${mrRounds[3]}\nFound under 50: ${mrRounds[4]}`);