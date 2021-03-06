import {$log} from "ts-log-debug";

// export const servers: Map<any, any> = new Map();

/**
 * Load the server silently without listening port and configure it on test profile.
 * @decorator
 * @param server
 * @param args
 * @returns {(done:Function)=>undefined}
 */
export function bootstrap(server: any, ...args: any[]) {
  $log.stop();
  process.env.NODE_ENV = process.env.NODE_ENV || "test";

  if (after) {
    after(() => {
      this.$$injector = null;
    });
  }

  return function before() {
    const instance = new server(...args);

    instance.startServers = () => Promise.resolve();
    this.$$injector = instance.injector;

    return instance.start();
  };
}
