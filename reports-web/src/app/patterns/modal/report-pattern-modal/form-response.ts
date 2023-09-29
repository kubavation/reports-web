import {ReportPatternParameter} from "../../model/report-pattern-parameter";
import {GenerationType} from "../../model/generation-type";

export interface FormResponse {
  name: string;
  description: string;
  file: File;
  parameters: ReportPatternParameter[];
  generationType: GenerationType;
}
