import {GenerationType} from "./generation-type";

export interface ReportPattern {
  id: number;
  name: string;
  description: string;
  subsystem: string;
  fileName: string;
  generationType: GenerationType;
}
