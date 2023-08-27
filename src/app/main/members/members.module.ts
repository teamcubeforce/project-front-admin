import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { ListMembersComponent } from './list-members/list-members.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { ProfileMemberComponent } from './profile-member/profile-member.component';


@NgModule({
  declarations: [
    ListMembersComponent,
    NewMemberComponent,
    ProfileMemberComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
