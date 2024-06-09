import { BrowserRouter, Route, Routes} from "react-router-dom";
import { DefaultPage } from "./Pages/DefaultPage";


export const EcommerceRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  );
};