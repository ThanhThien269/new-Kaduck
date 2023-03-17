import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'guestjoining',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    canActivate: [AuthGuardGuard],
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'lobby/:id',
    canActivate: [AuthGuardGuard],
    loadChildren: () =>
      import('./pages/lobby/lobby.module').then((m) => m.LobbyModule),
  },
  {
    path: 'createquestion',

    loadChildren: () =>
      import('./pages/createquestion/createquestion.module').then(
        (m) => m.CreatequestionModule
      ),
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./pages/library/library.module').then((m) => m.LibraryModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./pages/history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'playing',
    loadChildren: () =>
      import('./pages/playing/playing.module').then((m) => m.PlayingModule),
  },
  {
    path: 'result',
    loadChildren: () =>
      import('./pages/result/result.module').then((m) => m.ResultModule),
  },
  {
    path: 'guestplaying',
    loadChildren: () =>
      import('./pages/guestplaying/guestplaying.module').then(
        (m) => m.GuestplayingModule
      ),
  },
  {
    path: 'join/:id',
    loadChildren: () =>
      import('./pages/join/join.module').then((m) => m.JoinModule),
  },
  {
    path: 'guestjoining',
    loadChildren: () =>
      import('./pages/guestjoining/guestjoining.module').then(
        (m) => m.GuestjoiningModule
      ),
  },

  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
