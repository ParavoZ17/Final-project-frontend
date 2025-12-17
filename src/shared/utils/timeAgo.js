export const timeAgo = (iso) => {
  const d = new Date(iso).getTime();
  const now = Date.now();
  const s = Math.max(1, Math.floor((now - d) / 1000));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}
