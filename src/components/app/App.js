import { BrowserRouter as Router } from 'react-router-dom'
import { Suspense } from 'react';

import './App.css';
import AppHeader from '../header/AppHeader';
import Spinner from '../Spinner/Spinner';

import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <Router>
      <div className='app'>
        <AppHeader />
        <Suspense fallback={<Spinner />}>
          <AnimatedRoutes />
        </Suspense>
      </div >
    </Router>
  );
}

export default App;
