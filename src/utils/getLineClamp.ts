export default function getLineClamp(titleHeight: number) {
  if (!titleHeight) return 0

  return Math.floor((459 - 267 - titleHeight - 10 - 45 - 10) / 15)
}
