import { players } from './player.model';
import {question_kit} from './question_kit.model';
export interface game{
  disabled : boolean;
  id : string;
  pin :string;
  question_kitId : string;
  players : players[];
}
