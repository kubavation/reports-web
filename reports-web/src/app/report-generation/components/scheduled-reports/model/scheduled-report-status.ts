import {SchedulingStatus} from "./scheduling-status";

export interface ScheduledReportStatus {
  status: SchedulingStatus;
  at: Date;
}
