
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ExpenseTracker from './Components/ExpenseTracker'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from './Components/Menu'
import IncomeTracker from './Components/IncomeTracker'



function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<ExpenseTracker />} />
          <Route path='/income' element={<IncomeTracker />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
