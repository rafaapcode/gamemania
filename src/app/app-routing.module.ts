import { UpdatePcComponent } from './updatePc/update-pc.component';
import { UpdatePerifericoComponent } from './updatePeriferico/update-periferico.component'
import { UpdateComponenteComponent } from './updateComponente/update-componente.component'
import { AddComponenteComponent } from './add-componente/add-componente.component';
import { AddPerifericoComponent } from './add-periferico/add-periferico.component';
import { AddPcComponent } from './add-pc/add-pc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'addpc', component: AddPcComponent },
  { path: 'addperiferico', component: AddPerifericoComponent },
  { path: 'addcomponent', component: AddComponenteComponent },
  { path: 'updatepc/:id', component: UpdatePcComponent },
  { path: 'updateperiferico/:id', component: UpdatePerifericoComponent },
  { path: 'updatecomponente/:id', component: UpdateComponenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
