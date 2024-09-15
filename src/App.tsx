// import logo from "./logo.svg"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Budget from './pages/Budget'
import Categories from './pages/Categories'
import Navbar from './components/Navbar'

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />  {/* 네비게이션 바 추가 */}
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/budget" element={<Budget />} />
                    <Route path="/categories" element={<Categories />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
