import { players } from "../models/player.model";
export interface PlayerState {
  players: players[];
  loading : boolean;
  error : string;
}
