/*!
 * Cbytes v1.0.2 (https://github.com/yonicb/cbytes)
 * Copyright 2019 The Cbytes Authors
 * Copyright 2019 Yoni Calsin <@yonicb>.
 * Licensed under MIT (https://github.com/yonicb/cbytes/blob/master/LICENSE)
 */
import { sizeToObject } from '../lib/size-to-object';
import { formatToObject } from '../lib/format-to-object';
import { objectToFormat } from '../lib/object-to-format';
import { toNumber } from '../lib/to-number';
import { toString } from '../lib/to-string';
import { cbytes } from '../lib';

module.exports = cbytes;
module.exports.cbytes = cbytes;
module.exports.toString = toString;
module.exports.toNumber = toNumber;
module.exports.objectToFormat = objectToFormat;
module.exports.formatToObject = formatToObject;
module.exports.sizeToObject = sizeToObject;
