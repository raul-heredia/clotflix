import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(array: Array<any>, textSearch?: any) {
    let texto = textSearch;
    let filteredArray = [];
    if (array) {
      filteredArray = array.filter((a) => a.nombreCompleto.toLowerCase().includes(texto.toLowerCase()) || a.plataforma.toLowerCase().startsWith(texto.toLowerCase()) || a.director.toLowerCase().startsWith(texto.toLowerCase()) || a.productora.toLowerCase().startsWith(texto.toLowerCase()));
    }
    return filteredArray;
  }

}
