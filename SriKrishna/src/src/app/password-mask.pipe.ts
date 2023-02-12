import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordMask'
})
export class PasswordMaskPipe implements PipeTransform {

  transform(value: any): any {
    let masked='';
    for(let i=0; i<value.length;i++)
    {
    masked= value.replace(/./g, '*');
    
    }
    return masked;
  }

}
