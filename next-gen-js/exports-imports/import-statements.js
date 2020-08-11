// syntax
import person from './person';
import prs from '.person';

import {baseData} from ('./utility.js');
import {clean} from '.export-import2.js';

// assigning an alias
import {smth as Smth} from './utility.js';

// or
import * as bundled from './utility';

console.log(person);