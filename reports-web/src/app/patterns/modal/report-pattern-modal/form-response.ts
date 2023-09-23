import {ReportPatternParameter} from "../../model/report-pattern-parameter";

export interface FormResponse {
  name: string;
  description: string;
  file: File;
  parameters: ReportPatternParameter[]
}
