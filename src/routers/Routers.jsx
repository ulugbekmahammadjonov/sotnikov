
import { Routes, Route } from 'react-router-dom'

import Posts from '../pages/Posts'
import Tasks from '../pages/Tasks'
import Alboms from '../pages/Alboms'
const Routers = () => {
  return (

    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/albums" element={<Alboms />} />
    </Routes>
  
  )
}

export default Routers