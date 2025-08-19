import React from "react";
import { Provider } from "./components/ui/provider";
import { AppProvider } from "./contexts";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Resources from "./pages/Resources";
import Dashboard from "./pages/Dashboard";
import Toolkit from "./pages/Toolkits";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate to="/dashboard" replace />} /> {/* default page */}
      <Route path="resources" element={<Resources />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="toolkit" element={<Toolkit />} />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <Provider>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </Provider>
  );
};

export default App;
