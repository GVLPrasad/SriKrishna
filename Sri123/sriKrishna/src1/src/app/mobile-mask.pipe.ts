import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileMask'
})
export class MobileMaskPipe implements PipeTransform {

  transform(value:String): String {
    let firstUnmasked='';
    let Masked='';
    let lastUnmasked='';
    console.log('mzask')
    for(let i=0;i<value.length;i++)
    {
    
        firstUnmasked=value.slice(0,2)
        Masked=value.slice(2,value.length-2)
       lastUnmasked=value.slice(value.length-2,value.length+1)
     
     
    }
    return firstUnmasked+ Masked.replace(/./g, '.')+lastUnmasked;
  }

}
