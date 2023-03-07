import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatequestionComponent } from './createquestion.component';

const routes: Routes = [{ path: '', component: CreatequestionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatequestionRoutingModule { }
