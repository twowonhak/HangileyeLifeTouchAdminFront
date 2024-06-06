import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "select2/dist/css/select2.min.css";
import "quill/dist/quill.core.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/scss/argon-dashboard-pro-react.scss?v1.2.1";

import AdminLayout from "views/layouts/Admin.js";
import RTLLayout from "views/layouts/RTL.js";
import AuthLayout from "views/layouts/Auth.js";
import QuestionLayout from "views/layouts/Question.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
      <Route path="/auth/*" element={<AuthLayout />} />

      <Route path="/questionMain/*" element={<QuestionLayout />} />


      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/rtl/*" element={<RTLLayout />} />
    </Routes>
  </BrowserRouter>
);
