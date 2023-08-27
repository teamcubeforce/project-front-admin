import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMembersComponent } from './list-members/list-members.component';
import { NewMemberComponent } from './new-member/new-member.component';

const routes: Routes = [
  {
    path:'',
    component: ListMembersComponent
  },
  {
    path:'nuevo',
    component: NewMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
