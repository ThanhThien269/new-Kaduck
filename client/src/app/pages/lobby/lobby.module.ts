import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyRoutingModule } from './lobby-routing.module';
import { LobbyComponent } from './lobby.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LobbyComponent
  ],
  imports: [
    CommonModule,
    LobbyRoutingModule,
    SharedModule
  ]
})
export class LobbyModule { }
