export default function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const segments: string[] = [];

  if (h > 0) {
    segments.push(h.toString());
    segments.push(m < 10 ? "0" + m : m.toString());
  } else {
    segments.push(m.toString());
  }

  segments.push(s < 10 ? "0" + s : s.toString());

  return segments.join(":");
}
