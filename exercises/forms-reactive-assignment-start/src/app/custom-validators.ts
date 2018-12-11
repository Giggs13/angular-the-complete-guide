import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomValidators {

  static forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return {'projectNameIsForbidden': true};
    }
    return null;
  }

  static forbiddenProjectNameAlso(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Tester') {
          resolve({'projectNameIsForbiddenAlso': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
