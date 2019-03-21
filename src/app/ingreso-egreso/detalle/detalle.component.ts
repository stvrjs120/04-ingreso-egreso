import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgresoModel } from '../ingreso-egreso.model';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../ingreso-egreso.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, OnDestroy {

  items: IngresoEgresoModel[];
  subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>,
              public ingresoEgresoService: IngresoEgresoService) { }

  ngOnInit() {
    this.subscription = this.store.select('ingresoEgreso')
      .subscribe(ingresoEgreso => {
        console.log(ingresoEgreso.items);
        this.items = ingresoEgreso.items;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  borrarItem(item: IngresoEgresoModel) {
    this.ingresoEgresoService.borrarIngresoEgreso(item);
  }

}
