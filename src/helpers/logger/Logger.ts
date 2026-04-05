export class Logger {
  public static step(message: string): void {
    console.log(`\n📝 STEP: ${message}`);
  }

  public static info(message: string): void {
    console.log(`ℹ️ INFO: ${message}`);
  }

  public static warn(message: string): void {
    console.warn(`⚠️ WARN: ${message}`);
  }

  public static error(message: string): void {
    console.error(`❌ ERROR: ${message}`);
  }

  public static pass(message: string): void {
    console.log(`✅ PASS: ${message}`);
  }

  public static fail(message: string): void {
    console.error(`❌ FAIL: ${message}`);
  }
}
