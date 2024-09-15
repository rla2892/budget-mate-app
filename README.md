# budget-mate-app
BudgetMate is a personal finance management app built with React and TypeScript. Easily track your income, expenses, and set budgets to achieve your financial goals. The app leverages Redux for global state management and offers a clean, intuitive interface for managing transactions, budgeting, and visualizing financial data.

### 1. **Core Features**
- **Transaction Management**: Users can add, edit, and delete transactions.
- **Budget Tracking**: Users can set and manage their budgets.
- **Category Management**: Users can categorize their transactions and view category-based statistics.
- **Dashboard**: Displays an overview of financial status, recent transactions, and expense breakdown by category.
- **Charts**: Visualize financial data using charts (e.g., category-wise expenses, income vs. expenses).

## Project Structure

The project is structured to separate concerns and ensure maintainability. The types used in the application are stored in a dedicated `types/` folder for easy access and reuse across the project.

```bash
src/
├── components/         # UI components
├── hooks/              # Custom React hooks
├── pages/              # Application pages
├── services/           # Business logic and API services
├── store/              # Redux store configuration
├── types/              # TypeScript interfaces and types
│   ├── transaction.ts  # Transaction-related types
│   ├── user.ts         # User-related types
│   └── index.ts        # Export all types
├── App.tsx             # Main app component
├── index.tsx           # App entry point
```