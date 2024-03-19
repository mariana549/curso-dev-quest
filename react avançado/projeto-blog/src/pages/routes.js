import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Post } from "./posts"

const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Post />} />
            <Route exact path="/post/:id" element={<Post />} />
         </Routes>
      </BrowserRouter>
   )
}

export { AppRoutes }