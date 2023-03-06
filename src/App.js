//react
import { BrowserRouter, Route, Routes }  from 'react-router-dom';

//styles
import './styles/utils/_mixins.scss'
//pages
import Home from './pages/Home'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = { < Home /> } />
      </Routes>
    </BrowserRouter>

 </>
  )
}

export default App
