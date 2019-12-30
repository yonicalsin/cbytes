import { Options } from '../index';
import { toString } from './to-string';
import { toNumber } from './to-number';

/**
 * @param val number | string
 * @param options decimals, separator
 * @Return number, string
 */
export const cbytes = (val: number | string, options?: Options) => {
    if (typeof val === 'number') {
        return toString(val, options);
    } else if (typeof val === 'string') {
        return toNumber(val);
    }
};
