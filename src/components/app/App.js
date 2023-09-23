import { BrowserRouter as Router } from 'react-router-dom'
import { Suspense } from 'react';
import './App.css';
import AppHeader from '../header/AppHeader';
import Spinner from '../Spinner/Spinner';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { useronline } from '../pages/LoginPage/LoginPageSlice';
import AnimatedRoutes from './AnimatedRoutes';
import { useSignoutMutation } from '../../apiFirebase/apiFireBaseSlice';


function App() {
  const [onUserSignOut,] = useSignoutMutation()
  const dispatch = useDispatch()
  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user !== null && user) {
        dispatch(useronline(user.email))
      } else {
        dispatch(useronline('offline'))
      }
    })
    return unsubscribe
  }, [dispatch])

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
