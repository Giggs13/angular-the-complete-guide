import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any[], propName: string): any {
    if (!value || value.length === 0) {
      return value;
    }

    return value.sort((a: any, b: any): number => {
      if (a[propName] > b[propName]) {
        return 1;
      } else if (a[propName] < b[propName]) {
        return -1;
      }
      return 0;
    });
  }
}
