import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayingRoutingModule } from './playing-routing.module';
import { PlayingComponent } from './playing.component';


@NgModule({
  declarations: [
    PlayingComponent
  ],
  imports: [
    CommonModule,
    PlayingRoutingModule,
    SharedModule
  ]
})
export class PlayingModule { }
