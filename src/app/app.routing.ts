//Importar los modulos del routes de angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes a los cuales les quiero hacer una pagina exclusiva
import { IssuesComponent } from './components/issues/issues.component';

//Array de rutas

const appRoutes: Routes = [
    {path:'', redirectTo: '/issues', pathMatch: 'full'},
    {path:'issues', component: IssuesComponent},
];

//Exportar el modulo de rutas
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}