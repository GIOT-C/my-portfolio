import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ProjectsPage from "./Pages/Projects";
import ContactPage from "./Pages/Contact";
import Root from "./Components/Root";
import { createContext, useState } from "react";

interface MainContextType {
  changeLanguage: boolean;
  setChangeLanguage: React.Dispatch<React.SetStateAction<boolean>>;
  changeDayMode: boolean;
  setChangeDayMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>
  )
);

export const MainContext = createContext<MainContextType | undefined>(
  undefined
);

function App() {
  const [changeLanguage, setChangeLanguage] = useState<boolean>(true);
  const [changeDayMode, setChangeDayMode] = useState<boolean>(true);
  return (
    <>
      <MainContext.Provider
        value={{
          changeLanguage,
          setChangeLanguage,
          changeDayMode,
          setChangeDayMode,
        }}
      >
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  );
}

export default App;
