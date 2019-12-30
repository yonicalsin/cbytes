import { More } from '../index';

export const b = 1;
export const kb = 1024; // Kibibyte
export const mb = kb * kb; // Mebibyte
export const gb = mb * kb; // Gibibyte
export const tb = gb * kb; // Tebibyte
export const pb = tb * kb; // Pebibyte
export const eb = pb * kb; // Exbibyte
export const zb = eb * kb; // Zebibyte
export const yb = zb * kb; // Yobibyte

/**
 * All units in object
 */
export const units: More = { b, kb, mb, gb, tb, pb, eb, zb, yb };

/**
 * RegExp for format desctructured
 */
export const parseFormat: RegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(b|kb|mb|gb|tb|pb|eb|zb|yb)$/i;
export const parseThousand: RegExp = /\B(?=(\d{3})+(?!\d))/g;
