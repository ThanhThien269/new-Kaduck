import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestplayingRoutingModule } from './guestplaying-routing.module';
import { GuestplayingComponent } from './guestplaying.component';


@NgModule({
  declarations: [
    GuestplayingComponent
  ],
  imports: [
    CommonModule,
    GuestplayingRoutingModule
  ]
})
export class GuestplayingModule { }
