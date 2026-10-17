import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from '@/Layout';
import { About, Docs, Home, Lab, NotFound } from '@/views'

export default ()=> {
  return (
    <BrowserRouter basename='/color-book/'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/docs' element={<Docs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/lab' element={<Lab/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
