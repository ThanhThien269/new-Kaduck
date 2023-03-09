import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestplayingComponent } from './guestplaying.component';

const routes: Routes = [{ path: '', component: GuestplayingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestplayingRoutingModule { }
