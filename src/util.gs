
/**
 * 秒数を「X時間Y分」に変換
 */
function formatTime(seconds) {
  const s = Number(seconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return (h > 0 ? `${h}時間` : "") + `${m}分`;
}
