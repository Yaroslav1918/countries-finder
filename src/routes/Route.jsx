import { lazy } from "react";
import { Route, Routes} from "react-router-dom";


const HomePage = lazy(() =>
  import("../pages/Home" /* webpackChunkName: "HomePage" */)
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage" /* webpackChunkName: "NotFoundPage" */)
);
const CountryDetail = lazy(() =>
  import("../components/CountryDetail" /* webpackChunkName: "NotFoundPage" */)
);

const RoutesComponent = () => {
  return (
   
      <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/country/:name" element={<CountryDetail />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  
   
  );
};

export default RoutesComponent;
