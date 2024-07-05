import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
// import './App.css'
import authService from './appwrite/auth'
import {logIn,logOut}  from './store/authSlice'
import { Footer, Header } from './components'
function App() {
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.currentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(logIn(userData))
      }else{
        dispatch(logOut())
      }
    })
    .finally(()=>{setLoading(false)})
  },[])


  return(loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ): null)
}

export default App
