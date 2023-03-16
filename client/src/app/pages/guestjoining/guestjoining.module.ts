import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestjoiningRoutingModule } from './guestjoining-routing.module';
import { GuestjoiningComponent } from './guestjoining.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    GuestjoiningComponent
  ],
  imports: [
    CommonModule,
    GuestjoiningRoutingModule,
    SharedModule
  ]
})
export class GuestjoiningModule { }
