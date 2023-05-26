import "./App.css";
import { RouterProvider } from "react-router-dom";
import routs from "./Routes/PublicRoutes/Routes";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;
