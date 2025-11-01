
/**
 * HoYoLab APIからデイリーノートを取得
 */
function fetchDailyNote() {
  const url = `https://bbs-api-os.hoyoverse.com/game_record/genshin/api/dailyNote?role_id=${UID}&server=${SERVER}`;
  const headers = {
    "Cookie": `ltoken_v2=${COOKIE_LTOKEN_V2}; ltuid_v2=${COOKIE_LTUID_V2}`
  };
  const options = { method: "get", headers: headers, muteHttpExceptions: true };

  const response = UrlFetchApp.fetch(url, options);
  const result = JSON.parse(response.getContentText());

  // Cookie失効チェック
  if (result.retcode === 10001) {
    logMessage("Cookie expired or invalid. Please update your credentials.");
    sendDiscordMessage("契約の効力が尽きたようだ。新たな印を結び直すとしよう。");
    throw new Error("Cookie expired.");
  }

  if (result.retcode !== 0) {
    throw new Error(`API Error: ${result.message}`);
  }

  return result.data;
}