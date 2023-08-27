import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersModule } from './members/members.module';

const routes: Routes = [
  {
    path:'miembros',
    loadChildren:()=>import('./members/members.module').then(m=>MembersModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
