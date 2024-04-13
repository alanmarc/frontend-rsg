import { Navigate, Route, Routes} from 'react-router-dom';

import { Index } from '../pages/Index';
import { Login } from '../pages/Login';
import { Accounts } from '../pages/Account';
import Header from '../components/header/Header';
import { Transactions } from '../pages/Transaction';


export const AppRouter = () => {
  return (
    <>
        <Header /> 
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/account' element={<Accounts />} />
            <Route path='/login' element={<Login />} />
            <Route path='/transaction' element={<Transactions />} />
            <Route path='/' element={<Navigate to="/"/>} />
        </Routes>
    </>
  )
}
