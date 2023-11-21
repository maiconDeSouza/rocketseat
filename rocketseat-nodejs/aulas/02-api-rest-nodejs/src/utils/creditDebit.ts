type Ttype = 'credit' | 'debit'
export function creditDebit(amount: number, type: Ttype): number {
  return type === 'credit' ? amount : amount * -1
}
