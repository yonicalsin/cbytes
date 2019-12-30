import { formatToObject } from './format-to-object';
import { units } from './variables';

/**
 * @param format string
 * @Return number, null
 */
export const toNumber = (format: string): number | null => {
    const obj = formatToObject(format);
    if (obj.unit && obj.size) {
        return units[obj.unit.toLowerCase()] * obj.size;
    }
    return null;
};
