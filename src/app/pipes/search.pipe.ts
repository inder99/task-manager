import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(typeof args === undefined){
      return value;
    }
    return value.filter( el => {
        if(el.title.indexOf(args) !== -1){
          return true;
        }
    });
  }

}
