import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngresoEgresoModel } from './ingreso-egreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresEgresoComponent implements OnInit {

  forma: FormGroup;
  tipo = 'ingreso';

  constructor(public ingresoEgresoService: IngresoEgresoService) { }

  ngOnInit() {
    this.forma = new FormGroup({
      'descripcion': new FormControl('', Validators.required),
      'monto': new FormControl(0, Validators.min(0))
    });
  }

  crearIngresoEgreso() {
    const ingresoEgreso = new IngresoEgresoModel({ ... this.forma.value, tipo: this.tipo });
    this.ingresoEgresoService.crearIngresoEgreso(ingresoEgreso)
      .then(() => {
        this.forma.reset({ monto: 0 });
        Swal.fire('Creado', ingresoEgreso.descripcion, 'success');
      });
  }

}
