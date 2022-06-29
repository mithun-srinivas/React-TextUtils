import './App.css';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Layout from './components/Layout';
import WordCounter from './components/WordCounter';
import Play from './components/play';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, SetMode] = useState('lightMode')
  const [bg, Setbg] = useState('white')
  const [alert, Setalert] = useState('')
  const [display, Setdisplay] = useState('none')
  const toggleMode = () => {
      if(mode === 'lightMode'){
      SetMode('darkMode')
      Setbg('black')
      Setalert('Dark Mode enabled')
      Setdisplay('inline')
      setTimeout(() => (Setdisplay('none')),1000)
      
      }
      else{
      SetMode('lightMode');
      Setbg('white')
      Setalert('Light Mode enabled')
      Setdisplay('inline')
      setTimeout(() => (Setdisplay('none')),1000)
      }
  }
  document.body.style.backgroundColor = bg;
  return (
    <BrowserRouter>
    <Layout title={'Text Utils'} toggleMode={toggleMode} mode={mode} alert={alert} display={display}/>
      <Routes>
        <Route path='/' element={
            <TextForm displayMode={mode}/>
        }>
        </Route>
        <Route path='/wordCounter' element={
          <WordCounter  displayMode={mode}/>
        }></Route>
        <Route path='/play' element={
          <Play displayMode={mode}/>
        }></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
