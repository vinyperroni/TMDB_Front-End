import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";

const Router = (props) => {
  const page = props.match?.page || 1;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/:page" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
