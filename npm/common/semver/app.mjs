/**********************************************************************************************
 * https://github.com/npm/node-semver#readme
 **********************************************************************************************/

import { parse, inc } from 'semver';

const log = console.log;

log( parse('1.1.0-beta.7+build.11') );
log( inc('1.4.2', 'minor') );
log( inc('1.4.2', 'major') );
log( inc('1.4.2', 'patch') );
log( inc('1.4.3-beta.2', 'prerelease') );