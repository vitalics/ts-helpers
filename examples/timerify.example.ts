import { timerify } from '@typescript/helpers/decorators/performance';

import { PerformanceService } from '@typescript/helpers/services/performance';

const performance = PerformanceService.connect(); // one time only. for example on prepare hook

class Temp {
  constructor() {}

  @timerify()
  public lognTask() {
    return 500;
  }
}

performance.profiler.writeToFile('./profiler.json'); // write performance information to file
performance.disconect(); // clear GC from performance information. for example on destroy
