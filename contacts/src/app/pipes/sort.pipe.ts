import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortName'
})
export class SortNamePipe implements PipeTransform {
  transform( value: Array<any>, args?:any ): any {
      return value.sort((a,b)=>{
        let x = a.firstName.toLowerCase();
        let y= b.firstName.toLowerCase();
        if (x<y){
          return -1;
        }
        else{
          return 1;
        }
        return 0;
      });
    }
  }