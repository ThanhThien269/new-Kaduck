import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestplayingRoutingModule } from './guestplaying-routing.module';
import { GuestplayingComponent } from './guestplaying.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    GuestplayingComponent
  ],
  imports: [
    CommonModule,
    GuestplayingRoutingModule,
    SharedModule
  ]
})
export class GuestplayingModule { }
