import {Scoring} from "./scoring.model";

export class Subject {
  id: number;
  name: string;
  creditPoints: number;
  subjectScoring: Scoring;
  optional: boolean;
}
