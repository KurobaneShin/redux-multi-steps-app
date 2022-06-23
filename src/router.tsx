import { useRoutes } from "react-router-dom";

import Step1 from "../src/pages/formStep1";
import Step2 from "../src/pages/formStep2";
import Step3 from "../src/pages/formStep3";

const Router = () => {
  return useRoutes([
    { path: "/", element: <Step1 /> },
    { path: "/step2", element: <Step2 /> },
    { path: "/step3", element: <Step3 /> },
  ]);
};

export default Router;
