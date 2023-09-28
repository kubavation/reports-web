import {ReportPatternParameter} from "./report-pattern-parameter";
import {GenerationType} from "./generation-type";

export interface AddReportPattern {
  name: string;
  description: string;
  subsystem: string;
  generationType: GenerationType;
  parameters: ReportPatternParameter[];
}
