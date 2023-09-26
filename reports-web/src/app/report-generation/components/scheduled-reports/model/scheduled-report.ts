import {ScheduledReportStatus} from "./scheduled-report-status";

export interface ScheduledReport {
  id: number;
  name: string;
  description: string;
  subsystem: string;
  fileName: string;
  status: ScheduledReportStatus;
  at: Date
}
