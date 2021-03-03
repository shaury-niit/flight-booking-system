import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, args?: number): number {
    if(args!=undefined)  {​​​​

      return value - (value*args)/100;

}​​​​ else {​​​​

       return value - (value*10)/100;;
}​​​​
  }

}
