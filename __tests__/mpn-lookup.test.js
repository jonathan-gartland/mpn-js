const QTArrays = require('../qtfile');
const { describe, expect, test } = require('@jest/globals');
// import {describe, expect, test} from '@jest/globals'

describe('MPN Lookup Tests for QT values', () => {
    test('lookup cases MPN', () => {
        expect(QTArrays.getQTmpn(0))
            .toStrictEqual(["<1.0", 0, 3.7]);
        expect(QTArrays.getQTmpn(51))
            .toStrictEqual([">200.5", 146.1, "infinite"]);

        expect(QTArrays.getQTmpn('x')).toBeFalsy();
        expect(QTArrays.getQTmpn(-1)).toBeFalsy();
        expect(QTArrays.getQTmpn(52)).toBeFalsy();

        for (let i = 0; i < 52; i++){
            expect(QTArrays.getQTmpn(i)).toBeTruthy();
        }
    });

    test('lookup cases MPN QT2K', () => {
        expect(QTArrays.getQT2Kmpn(49, 48))
            .toStrictEqual([ '>2419.6', 1439.5, 'infinite' ]);
    });

    test('lookup cases MPNLegio', () => {
        expect(QTArrays.getQTLEGIOmpn(90, 6))
            .toStrictEqual(">2272.6");
    });
});
