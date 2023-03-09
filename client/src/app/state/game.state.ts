import { game } from "../models/game.model";

export interface gameState{
    game : game[];
    loading : boolean;
    error : string;
}
