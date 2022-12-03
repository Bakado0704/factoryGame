import { Job, JobName } from "./job";
import { IconType } from "./icon";

export interface User {
  name: string;
  money: number;
  icon: IconType;
  nowJob: JobName;
  jobs: {
    yamagawa: Job;
    niimori: Job;
    miyako: Job;
    tsuzi: Job;
    lie: Job;
    takeuchi: Job;
    kuroguchi: Job;
    yamashiata: Job;
    ozasa: Job;
    kamobayashi: Job;
  };
}
