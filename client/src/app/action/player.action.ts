import { createAction,props } from "@ngrx/store";
import {  players } from "/../new-Kaduck/client/src/app/models/player.model";

export const loadPlayers = createAction(`[Players] Load Players`);
export const loadPlayersSuccess = createAction(`[Players] Load Players`,props<{players : players[]}>());
export const loadPlayersFail = createAction(`[Players] Load Players Fail`,props<{error : string}>());
