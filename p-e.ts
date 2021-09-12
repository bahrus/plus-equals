import {PassUp} from 'pass-up/pass-up.js';
import {def} from 'trans-render/lib/def.js';

export class PE extends PassUp{
    static is = 'p-e';
    override doSet(match: any, prop: string, lastVal: any){
        match[prop] += lastVal;
    }
}
def(PE);