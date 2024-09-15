import { Budget } from "./budget"
import { Category } from "./category"
import { Transaction } from "./transaction"
import { User } from "./user"

export interface RootState {
  transactions: Transaction[];
  budget: Budget;
  categories: Category[];
  user: User;
}
