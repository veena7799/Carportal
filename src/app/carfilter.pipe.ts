import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class CarfilterPipe implements PipeTransform {

  transform(dataArray: any[], searchTerm: string): unknown {
    if(!searchTerm){
      return dataArray;    
    }
    else{
    return dataArray.filter(carobj=>carobj.carname.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1  )
    }
  }

}
