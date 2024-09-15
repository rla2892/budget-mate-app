export type Transaction = {
  id: string;
  type: `income` | `expense`;
  amount: number;
  category: string;
  date: string; // ISO 포맷
  description?: string;
}