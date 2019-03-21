import { Pipe, PipeTransform } from '@angular/core';
import { IngresoEgresoModel } from './ingreso-egreso.model';

@Pipe({
  name: 'ordenIngresoEgreso'
})
export class OrdenIngresoEgresoPipe implements PipeTransform {

  transform(items: IngresoEgresoModel[]): IngresoEgresoModel[] {
    return items.sort( (a, b) => {
      return a.tipo === 'ingreso' ? -1 : 1;
    });
  }

}
