export interface Transaction {
  id: string;
  type: `income` | `expense`;
  amount: number;
  category: string;
  date: string; // YYYY-MM-DD format
  description?: string;
}