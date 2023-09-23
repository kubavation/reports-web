export interface ReportGeneration {
  reportName: string;
  subsystem: string;
  format: string;
  parameters: Record<string, any>;
}
