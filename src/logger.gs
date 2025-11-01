
/**
 * ログ出力関数（Logger）
 */
function logMessage(message) {
  const timestamp = new Date();
  Logger.log(`[${timestamp.toLocaleString("ja-JP")}] ${message}`);
}