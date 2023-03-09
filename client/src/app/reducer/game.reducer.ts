import { gameState } from "../state/game.state";
import * as gameActions from "../action/game.action";
import { createReducer,on } from "@ngrx/store";
const initialState : gameState = {
  game : [],
  loading : false,
  error : "",
}
export const gameReducer = createReducer(
  initialState,
  on(gameActions.loadGames, (state) => {
    return { ...state, loading: true };
  }),
  on(gameActions.loadGamesSuccess, (state,action) => {
    return ({ ...state, game: action.game, loading: false });
  }),
  on (gameActions.loadGamesFail, (state,action) => {
    return ({ ...state, error: action.error, loading: false });
  }),
)
