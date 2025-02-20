import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar.jsx'
import Footer from './layout/Footer.jsx'
import UserList from './pages/UserList.jsx'
import PostList from './pages/PostList.jsx'
import AlbumList from './pages/AlbumList.jsx'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/user_list' element={<UserList />} />
        <Route path='/post_list' element={<PostList />} />
        <Route path='/album_list' element={<AlbumList />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
