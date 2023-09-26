import {ReportGenerationParameter} from "./report-generation-parameter";

export interface ScheduleReportGeneration {
  reportName: string;
  subsystem: string;
  format: string;
  parameters: ReportGenerationParameter[];
  at: Date;
}
