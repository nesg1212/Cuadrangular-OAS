import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { table } from 'console';
import {TableComponent} from './components/table/table.component'
import {TeamListComponent} from './components/team-list/team-list.component'
import {TeamFormComponent} from './components/team-form/team-form.component'
const routes: Routes = [
  {path:'',
  redirectTo:'teams',
  pathMatch: 'full'
},
{
  path : 'teams',
  component : TableComponent
},
{
  path:'registro',
  component : TeamListComponent
},{
  path:'teams/:id',
  component : TeamFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
