import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let result: string = '';
    for (let i = value.length; i >= 0; i--) {
      if (value[i] !== undefined) {
        result += value[i];
      }
    }
    return result;

    // Solution by using the built-in reverse method
    // return value.split('').reverse().join('');
  }

}
