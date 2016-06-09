import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'values'})
export class ValuesPipe implements PipeTransform {
    transform(value: any, args?: any[]): Object[] {
        if (value == null) {
            return null;
        }

        let keyArr = Object.keys(value),
            dataArr: any = [],
            keyName: any = args[0];

        keyArr.forEach(key => {
            value[key][keyName] = key;
            dataArr.push(value[key])
        });


        if(args[1]) {
            dataArr.sort((a: Object, b: Object): number => {
                return a[keyName] > b[keyName] ? 1 : -1;
            });
        }
        
        return dataArr;
    }
}