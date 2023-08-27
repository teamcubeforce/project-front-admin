import { Component } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss']
})
export class ListMembersComponent {
  filter:boolean = false;
  members:Member[] = [];
  constructor(public memberService:MembersService){}
  ngOnInit(){
    this.members=this.memberService.listMembers
  }
  /*Funcion para filtrar por estado*/
  //Abrir menu
  filterState(){
    this.filter = !this.filter
  }
  //Elegir estado
  checkState(state:string){
    let list_members: Member[]= this.memberService.listMembers;
    this.members = list_members.filter((member)=>
      member.state_member==state
    )
    this.filter = false;
  }
  /*Funcion para filtrar por nombre */
  searchMember($event:any){
    let words = $event.target.value.toLowerCase();
    this.members = this.memberService.listMembers.filter((member) =>
        member.name_member.toLowerCase().includes(words)
      );
  }
}
