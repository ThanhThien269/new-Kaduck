import { answer } from "./answer.model";
export interface question{
    questions : string;
    timer : number;
    img : string;
    points : number;
    point_type : string;
    id : string;
    answers: answer[];
}
