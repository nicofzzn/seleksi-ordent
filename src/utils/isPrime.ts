export default function isPrime(num: number): boolean {
  for (let i = 2; i < num; i++) if (num % i === 0) return false
  return num > 2
}
