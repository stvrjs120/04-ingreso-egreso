import { Routes } from '@angular/router';
import { EstadisticaComponent } from '../ingres-egreso/estadistica/estadistica.component';
import { IngresEgresoComponent } from '../ingres-egreso/ingres-egreso.component';
import { DetalleComponent } from '../ingres-egreso/detalle/detalle.component';


export const dashboardRoutes: Routes = [
    { path: '', component: EstadisticaComponent },
    { path: 'ingreso-egreso', component: IngresEgresoComponent },
    { path: 'detalle', component: DetalleComponent },
    { path: 'estadistica', component: EstadisticaComponent },
    { path: '**', redirectTo: '' }
];
