import { jsx, jsxs } from "react/jsx-runtime";
import "@inertiajs/react";
function Guest({ children }) {
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-slate-100 p-3 md:p-9 lg:p-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto h-full w-full", children: /* @__PURE__ */ jsxs("div", { className: "card md:card-side grid md:grid-cols-2 md:bg-slate-100 shadow-xl", children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-[425px] w-full", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "flex h-full w-full object-cover",
        src: "/o.jpg",
        alt: "Album"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "card-body h-[425px] bg-white", children })
  ] }) }) });
}
export {
  Guest as G
};
