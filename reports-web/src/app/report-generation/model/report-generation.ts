import {ReportGenerationParameter} from "./report-generation-parameter";

export interface ReportGeneration {
  reportName: string;
  subsystem: string;
  format: string;
  parameters: ReportGenerationParameter[];
}
