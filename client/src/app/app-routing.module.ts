import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
{ path: 'lobby', loadChildren: () => import('./pages/lobby/lobby.module').then(m => m.LobbyModule) },
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'lobby', loadChildren: () => import('./pages/lobby/lobby.module').then(m => m.LobbyModule) },
{ path: 'createquestion', loadChildren: () => import('./pages/createquestion/createquestion.module').then(m => m.CreatequestionModule) },
{path: 'library', loadChildren: () => import('./pages/library/library.module').then(m => m.LibraryModule)},
{path: 'history', loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryModule)},
{ path: 'playing', loadChildren: () => import('./pages/playing/playing.module').then(m => m.PlayingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
