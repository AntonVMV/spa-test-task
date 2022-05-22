import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyledHome } from "./pages/Home/Home.styles";
import { Layout } from "./pages/Layout";
import { StyledBlog } from "./pages/Blog/Blog.styles";
import { StyledAbout } from "./pages/About/About.style";
import { StyledCurrentArticle } from "./pages/CurrentArticle/CurrentArticle.style";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StyledHome />} />
          <Route path="Blog" element={<StyledBlog />} />
          <Route path="About" element={<StyledAbout />} />
          <Route path="Article/:id" element={<StyledCurrentArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
