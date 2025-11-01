
/**
 * Discordへ通知を送信
 */
function sendDiscordMessage(message) {
  try {
    const payload = JSON.stringify({ content: message });
    const params = {
      method: "post",
      contentType: "application/json",
      payload: payload
    };
    UrlFetchApp.fetch(DISCORD_WEBHOOK_URL, params);
    logMessage(`通知送信: ${message}`);
  } catch (e) {
    logMessage(`Discord通知失敗: ${e.message}`);
  }
}
