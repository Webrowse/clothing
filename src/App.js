import Home from './components/routes/home/home.component'
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/routes/navigation/nav-bar';
import SignIn from './components/routes/sign-in/sign-in.component';

const Shop = () => {
  return (<h1>Write the name of every function in capital letter</h1>)
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element = { <SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;