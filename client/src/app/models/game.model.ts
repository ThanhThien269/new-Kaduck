import { players } from './player.model';
import {question_kit} from './question_kit.model';
export interface game{
  id : string;
  pin :string;
  question_kit : question_kit[];
  players : players[];
}
