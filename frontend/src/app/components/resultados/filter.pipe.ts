import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe{
  transform(Partidos:any, term:any): any{
    if(term===undefined) return Partidos;

    return Partidos.filter(function(ninja){
      return Partidos.equipo2.toLowerCase().incluides(term.toLowerCase());
    })
  }

}