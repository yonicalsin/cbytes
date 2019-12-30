import { Options } from '../index';
import { kb, mb, gb, tb, pb, eb, zb, yb, units, parseThousand } from './variables';

/**
 * @param a number
 * @param options { decimals, separator }
 * @Return string
 */
export const toString = (a: number, { decimals, separator = '', everyThousand = '' }: Options = {}) => {
    let unit: string = 'B';
    let size: any = a;

    if ((a >= 0) && (a < kb)) {
        unit = 'B';
    } else if ((a >= kb) && (a < mb)) {
        unit = 'KB';
    } else if ((a >= mb) && (a < gb)) {
        unit = 'MB';
    } else if ((a >= gb) && (a < tb)) {
        unit = 'GB';
    } else if ((a >= tb) && (a < pb)) {
        unit = 'TB';
    } else if ((a >= pb) && (a < eb)) {
        unit = 'PB';
    } else if ((a >= eb) && (a < zb)) {
        unit = 'EB';
    } else if ((a >= zb) && (a < yb)) {
        unit = 'ZB';
    } else if (a >= yb) {
        unit = 'YB';
    }

    size = a / units[unit.toLowerCase()];
    // tslint:disable-next-line: no-unused-expression
    decimals !== undefined && (size = size.toFixed(decimals));
    size = `${size}${separator}${unit}`;
    // tslint:disable-next-line: no-unused-expression
    everyThousand !== '' && (size = size.replace(parseThousand, everyThousand));
    return size;
};
