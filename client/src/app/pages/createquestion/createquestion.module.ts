import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatequestionRoutingModule } from './createquestion-routing.module';
import { CreatequestionComponent } from './createquestion.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreatequestionComponent
  ],
  imports: [
    CommonModule,
    CreatequestionRoutingModule,
    SharedModule
  ]
})
export class CreatequestionModule { }
