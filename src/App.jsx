import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

const browserRoute = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Header />} />
))

import Header from './components/Header'
import InputWithText from './components/InputWithText'


function App() {

  return (
    <>
      <Header hideMenu={true} name="Joao"/>
      <InputWithText />
      <Header hideMenu={false} name="Carlos"/>
    </>
  )
}

export default App
