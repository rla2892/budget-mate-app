export type Transaction = {
  id: string;
  type: `income` | `expense`;
  amount: number;
  category: string;
  date: Date;
  description?: string;
}