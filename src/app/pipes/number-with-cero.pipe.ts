import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberWithCero'
})
export class NumberWithCeroPipe implements PipeTransform {

  transform(value: number): string {
    if(value <10){
      return `0${value}`;
    }else{
      return `${value}`;
    }
  }

}
