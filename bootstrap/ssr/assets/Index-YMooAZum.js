import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-rP3WPVCm.js";
import { Head } from "@inertiajs/react";
import TweetTopic from "./TweetTopic--buGKG0D.js";
import "react";
import "@headlessui/react";
import "./Modal-QOpWwH75.js";
function Dashboard({ auth, authURL, topics, comments }) {
  const user = auth.user;
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center bg-white shadow-sm sm:rounded-lg p-3", children: [
            /* @__PURE__ */ jsx("div", { className: "text-gray-900", children: "You're logged in!" }),
            /* @__PURE__ */ jsx(
              TweetTopic,
              {
                user,
                authURL,
                topics
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center p-3 md:p-8", children: comments.length ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: comments.map((comment) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "bg-white rounded-md shadow-md p-4",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full ring-2 ring-primary", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: user.avatar,
                      className: "h-full w-full rounded-full",
                      alt: "User Avatar"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: user.name }),
                    /* @__PURE__ */ jsxs("span", { className: "text-gray-500", children: [
                      "@",
                      user.username
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-800 mb-4", children: comment.tweet.text }),
                /* @__PURE__ */ jsx("div", { className: "bg-gray-100 p-4 rounded-md", children: /* @__PURE__ */ jsx("span", { className: "text-gray-900", children: comment.commentPost }) })
              ]
            },
            comment.id
          )) }) : /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-md shadow-md p-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-900 block mb-4", children: 'Welcome to xBot! To get started, please grant xBot read and write access by clicking on the xBot button on the top right corner and selecting "Grant Access".' }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-900 block mb-4", children: 'To add a topic, click on the same xBot button and select "Tweet Topic".' })
          ] }) })
        ] }) })
      ]
    }
  );
}
export {
  Dashboard as default
};
