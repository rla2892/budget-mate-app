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
├── pages/              # Application pages
├── store/              # Redux store configuration
├── types/              # TypeScript interfaces and types
│   ├── transaction.ts  # Transaction-related types
│   ├── user.ts         # User-related types
│   └── index.ts        # Export all types
├── App.tsx             # Main app component
├── index.tsx           # App entry point
```

## How to start
```bash
npm start
```

## How to build
```bash
npm run build
```

## How to test
```bash
npm test
```

## How to lint
```bash
npm run lint
```

<!-- ## How to format
```bash
npm run format
``` -->

## Technologies
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript
- **Redux**: State management library for JavaScript applications
- **Jest**: JavaScript testing framework
- **React Testing Library**: Testing utilities for React components
- **ESLint**: JavaScript linter tool
- **Chart.js**: Simple yet flexible JavaScript charting library
<!-- - **React Chartjs 2**: React wrapper for Chart.js -->
<!-- - **Tailwind CSS**: Utility-first CSS framework -->

## License(Apache)
This project is open source and available under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
