export interface ScheduledReport {
  id: number;
  name: string;
  description: string;
  subsystem: string;
  fileName: string;
  status: string;
  at: Date
}
