import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';

const routes: Routes = [
  {path:'home', component: CardListComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'**', redirectTo:'/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
