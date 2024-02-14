var _a;
import { jsx } from "react/jsx-runtime";
import axios from "axios";
import "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = ((_a = window.document.getElementsByTagName("title")[0]) == null ? void 0 : _a.innerText) || "xBot";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.jsx": () => import("./assets/ConfirmPassword-8haMs2xt.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-YG46kI1x.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-ZTg0UyQk.js"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-T4374nX4.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-d7cEJMxd.js"), "./Pages/Auth/VerifyEmail.jsx": () => import("./assets/VerifyEmail-f-tkm8GD.js"), "./Pages/Dashboard/Components/TweetTopic.jsx": () => import("./assets/TweetTopic--buGKG0D.js"), "./Pages/Dashboard/Index.jsx": () => import("./assets/Index-YMooAZum.js"), "./Pages/Profile/Edit.jsx": () => import("./assets/Edit-NTfT9R-q.js"), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => import("./assets/DeleteUserForm-aghFGrif.js"), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => import("./assets/UpdatePasswordForm-48nrfn10.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => import("./assets/UpdateProfileInformationForm-S7BoC1p4.js"), "./Pages/Welcome.jsx": () => import("./assets/Welcome-TdKf4IVY.js") })),
  // resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(/* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    color: "#4B2563",
    showSpinner: "true"
  }
});
