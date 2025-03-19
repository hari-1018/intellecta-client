import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider} from "@react-oauth/google";


const CLIENTID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENTID}>
        <App />
      </GoogleOAuthProvider>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);
