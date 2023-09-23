import {ReportPatternParameter} from "./report-pattern-parameter";

export interface AddReportPattern {
  name: string;
  description: string;
  subsystem: string;
  parameters: ReportPatternParameter[];
}
