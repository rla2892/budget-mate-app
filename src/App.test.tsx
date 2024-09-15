import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"
import { Provider } from 'react-redux'
import { store } from './store'

test(`renders learn react link`, () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const linkElement = screen.getByText(/Add transaction/i)
    expect(linkElement).toBeInTheDocument()
})

test(`adds transaction to the list`, () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )

    // Find the input and button elements
    const inputElement = screen.getByTestId(/transaction-amount/i)
    const buttonElement = screen.getByText(/Add transaction/i)

    // Simulate user input
    fireEvent.change(inputElement, { target: { value: 100 } })
    fireEvent.click(buttonElement)

    // Check if the transaction is added to the list
    const transactionElement = screen.getByText(/100/i)
    expect(transactionElement).toBeInTheDocument()
})
