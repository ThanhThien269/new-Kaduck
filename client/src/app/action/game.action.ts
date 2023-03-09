import { createAction,props } from "@ngrx/store";
import {  game } from "/../new-Kaduck/client/src/app/models/game.model";

export const loadGames = createAction(`[Game] Load Games`);
export const loadGamesSuccess = createAction(`[Game] Load Games`,props<{game : game[]}>());
export const loadGamesFail = createAction(`[Game] Load Games Fail`,props<{error : string}>());
