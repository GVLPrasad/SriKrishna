import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailMask'
})
export class EmailMaskPipe implements PipeTransform {

  transform(value: any): any {
    let atIdx = value.indexOf('@');
    let remainStr = value.substr(value);
    let str = '';
    for (let i = 0; i < atIdx; i++) {
      str = str + '*';
    }
    return str + value.substr(atIdx);
  }
  
}
