import { PassUp } from 'pass-up/pass-up.js';
import { def } from 'trans-render/lib/def.js';
export class PlusEquals extends PassUp {
    static is = 'plus-equals';
    doSet(match, prop, lastVal) {
        match[prop] += lastVal;
    }
}
def(PlusEquals);
