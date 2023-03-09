import { PlayerState } from './../state/player.state';
import * as playerAction  from "../action/player.action";
import { createReducer,on } from "@ngrx/store";

const initialState : PlayerState = {
  players : [],
  loading : false,
  error : "",
}

export const playerReducer = createReducer(
  initialState,
  on (playerAction.loadPlayers, (state) => {
    return { ...state, loading: true };
  }),
  on (playerAction.loadPlayersSuccess, (state,action) => {
    return ({ ...state, players: action.players, loading: false });
  }),
  on (playerAction.loadPlayersFail, (state,action) => {
    return ({ ...state, error: action.error, loading: false });
  }),
)
