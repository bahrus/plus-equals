import {PassUp} from 'pass-up/pass-up.js';
import {def} from 'trans-render/lib/def.js';

export class PlusEquals extends PassUp{
    static is = 'plus-equals';
    override doSet(match: any, prop: string, lastVal: any){
        match[prop] += lastVal;
    }
}
def(PlusEquals);