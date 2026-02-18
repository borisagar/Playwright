export class ConfigManager {
  static getBaseUrl(): string {
    return process.env.BASE_URL || 'https://practice.expandtesting.com';
  }

  static isHeadless(): boolean {
    return process.env.HEADLESS !== 'false';
  }

  static getBrowser(): 'chromium' | 'firefox' | 'webkit' {
    return (process.env.BROWSER as any) || 'chromium';
  }

  static getWorkers(): number {
    return Number(process.env.WORKERS) || 4;
  }
}
