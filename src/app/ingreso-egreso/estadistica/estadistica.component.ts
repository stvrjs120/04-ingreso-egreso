import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { IngresoEgresoModel } from '../ingreso-egreso.model';
import { Label} from 'ng2-charts';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {

  ingresos: number;
  egresos: number;
  cantIngresos: number;
  cantEgresos: number;

  subscription: Subscription = new Subscription();

  public doughnutChartLabels: Label[] = ['Ingresos', 'Egresos'];
  public doughnutChartData: number[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('ingresoEgreso')
      .subscribe(ingresoEgreso => {
        this.contarIngresoEgresos(ingresoEgreso.items);
      });
  }


  contarIngresoEgresos(items: IngresoEgresoModel[]) {
    this.ingresos = 0;
    this.egresos = 0;

    this.cantEgresos = 0;
    this.cantIngresos = 0;

    items.forEach(item => {
      if (item.tipo === 'ingreso') {
        this.cantIngresos++;
        this.ingresos += item.monto;
      } else {
        this.cantEgresos++;
        this.egresos += item.monto;
      }
    });

    this.doughnutChartData = [ this.ingresos, this.egresos ];
  }

}
