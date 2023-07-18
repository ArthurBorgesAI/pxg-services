import { React } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import ErrorPage from './ErrorPage';
import Root from "./Root";
import Home from "./Home";
import Materia from "./Materia";
import EstilistaS from "./EstilistaS";
import EstilistaA from "./EstilistaA";
import EstilistaB from "./EstilistaB";
import Chemical from "./Chemical/";
import Tailoring from "./Tailoring/";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="materias" element={<Materia />} />
      <Route path="chemicals" element={<Chemical />} />
      <Route path="EstilistaS" element={<EstilistaS />} />
      <Route path="EstilistaA" element={<EstilistaA />} />
      <Route path="EstilistaB" element={<EstilistaB />} />
      <Route path="Tailoring" element={<Tailoring />} />

    </Route>
  )
);

export default router;
