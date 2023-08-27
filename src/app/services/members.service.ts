import { Injectable } from '@angular/core';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  listMembers:Member[]=[
    {
      id_member: '2021TAYA01',
      name_member: 'Luis Gómez Taya',
      state_member: 'activo',
      photo_member: 'https://www.teamcubeforce.com/img/miembros/MiembroCubeForce.jpg'
    },
    {
      id_member: '2019ALLC01',
      name_member: 'Giordano Limber Aguilar Allcca',
      state_member: 'bloqueado',
      photo_member: 'https://www.teamcubeforce.com/img/miembros/GiordanoAguilar.jpg'
    },
    {
      id_member: '2020GARC07',
      name_member: 'José Alberto Fuenmayor Garcia',
      state_member: 'activo',
      photo_member: 'https://www.teamcubeforce.com/img/miembros/JoseFuenmayor.jpg'
    },
    {
      id_member: '2014RUIZ10',
      name_member: 'Kevin Arturo Huamán Ruiz',
      state_member: 'activo',
      photo_member: 'https://www.teamcubeforce.com/img/miembros/KevinHuaman.jpg'
    }
  ]
  constructor() { }

}
