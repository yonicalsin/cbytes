import { sizeToObject } from '../lib/size-to-object';

/**
 * FROM: 2147483648
 * TO: { unit: 'GB', size: 2, format: '2GB' }
 */
test('2147483648 to object', () => {
    expect(sizeToObject(2147483648)).toMatchObject({
        unit: 'GB',
        size: 2,
        format: '2GB',
    });
});

/**
 * FROM: 9332326.4
 * TO: { unit: 'MB', size: 8.9, format: '8.9MB' }
 */
test('9332326.4 to object', () => {
    expect(sizeToObject(9332326.4)).toMatchObject({
        unit: 'MB',
        size: 8.9,
        format: '8.9MB',
    });
});
