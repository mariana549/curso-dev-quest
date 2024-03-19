import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Post } from "./post"

const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Post />} />
         </Routes>
      </BrowserRouter>
   )
}

export { AppRoutes }