import Home from './components/routes/home/home.component'
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/routes/navigation/nav-bar';

const Shop = () => {
  return (<h1>Write the name of every function in capital letter</h1>)
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;