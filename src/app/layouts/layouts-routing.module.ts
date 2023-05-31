import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Seccion3Component } from './pages/seccion3/seccion3.component';
import { Seccion4Component } from './pages/seccion4/seccion4.component';
import { Seccion5Component } from './pages/seccion5/seccion5.component';
import { Seccion6Component } from './pages/seccion6/seccion6.component';
import { Seccion7Component } from './pages/seccion7/seccion7.component';
import { Seccion8Component } from './pages/seccion8/seccion8.component';
import { Seccion9Component } from './pages/seccion9/seccion9.component';
import { Seccion10Component } from './pages/seccion10/seccion10.component';
import { Seccion11Component } from './pages/seccion11/seccion11.component';
import { Seccion12Component } from './pages/seccion12/seccion12.component';
import { Seccion13Component } from './pages/seccion13/seccion13.component';
import { Seccion14Component } from './pages/seccion14/seccion14.component';
import { Seccion15Component } from './pages/seccion15/seccion15.component';
import { Seccion16Component } from './pages/seccion16/seccion16.component';
import { Seccion17Component } from './pages/seccion17/seccion17.component';
import { Seccion18Component } from './pages/seccion18/seccion18.component';
import { Seccion19Component } from './pages/seccion19/seccion19.component';
import { Seccion20Component } from './pages/seccion20/seccion20.component';
import { Seccion22Component } from './pages/seccion22/seccion22.component';
import { Seccion23Component } from './pages/seccion23/seccion23.component';
import { Seccion24Component } from './pages/seccion24/seccion24.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'seccion3', component: Seccion3Component },
      { path: 'seccion4', component: Seccion4Component },
      { path: 'seccion5', component: Seccion5Component },
      { path: 'seccion6', component: Seccion6Component },
      { path: 'seccion7', component: Seccion7Component },
      { path: 'seccion8', component: Seccion8Component },
      { path: 'seccion9', component: Seccion9Component },
      { path: 'seccion10', component: Seccion10Component },
      { path: 'seccion11', component: Seccion11Component },
      { path: 'seccion12', component: Seccion12Component },
      { path: 'seccion13', component: Seccion13Component },
      { path: 'seccion14', component: Seccion14Component },
      { path: 'seccion15', component: Seccion15Component },
      { path: 'seccion16', component: Seccion16Component },
      { path: 'seccion17', component: Seccion17Component },
      { path: 'seccion18', component: Seccion18Component },
      { path: 'seccion19', component: Seccion19Component },
      { path: 'seccion20', component: Seccion20Component },
      { path: 'seccion22', component: Seccion22Component },
      { path: 'seccion23', component: Seccion23Component },
      { path: 'seccion24', component: Seccion24Component },
      { path: '**', redirectTo: 'layouts' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
