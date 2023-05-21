import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Products from "./pages/Products";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}
