import {Routes, Route, Outlet} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import LoginPage from './pages/LoginPage'

const Layout = () => {
  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path='main' element={<MainPage />} />
        <Route path=':movieId' element={<DetailPage />} />
        <Route path='search' element={<SearchPage />} />
      </Route>
    </Routes>
    </>
  )
}



export default App