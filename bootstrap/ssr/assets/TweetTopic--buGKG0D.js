import { jsxs, jsx } from "react/jsx-runtime";
import { M as Modal } from "./Modal-QOpWwH75.js";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import "@headlessui/react";
function TweetTopic({ user, authURL, topics }) {
  const [open, setOpen] = useState(false);
  var oneTopic;
  if (topics.length) {
    oneTopic = topics[0];
  } else {
    oneTopic = {
      topic: "Twitter",
      tone: "Generate a nice honest comment to the twitter post provided"
    };
  }
  const { data, setData, errors, post } = useForm({
    topic: oneTopic.topic ?? "",
    tone: oneTopic.tone ?? ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("topic.store"));
    setOpen(false);
    alert("Update xBot Topic and Tone");
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "dropdown dropdown-end", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          tabIndex: 0,
          role: "button",
          className: "btn bg-slate-700 border-0 m-1",
          children: "xBot"
        }
      ),
      /* @__PURE__ */ jsxs(
        "ul",
        {
          tabIndex: 0,
          className: "dropdown-content z-90 menu p-3 shadow bg-slate-100 rounded-box w-52",
          children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: `${authURL}?uid=${user.id}`,
                className: "bg-slate-300 m-1",
                children: "Grant Access"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: (e) => {
                  e.preventDefault(), setOpen(true);
                },
                className: "bg-slate-300 m-1",
                children: "Tweet Topic"
              }
            ) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        show: open,
        onClose: (e) => {
          e.preventDefault(), setOpen(false);
        },
        children: /* @__PURE__ */ jsx("div", { className: "h-96 py-9", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
          /* @__PURE__ */ jsx("label", { className: "p-3", children: "Create xBot Tweet Topic" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 p-3", children: [
            errors.topic && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.topic }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: data.topic,
                onChange: (e) => setData("topic", e.target.value),
                type: "text",
                placeholder: "Topic",
                className: "bg-white text-gray-950 border-2 input input-bordered input-secondary w-full"
              }
            ),
            errors.tone && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.tone }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                value: data.tone,
                onChange: (e) => setData("tone", e.target.value),
                className: "bg-white text-gray-950 border-2 textarea textarea-secondary w-full",
                placeholder: "Bot Tone"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-3 text-white", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  onClick: (e) => {
                    e.preventDefault(), setOpen(false);
                  },
                  className: "btn bg-red-500",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsx("button", { onClick: submit, className: "btn", children: "Submit" })
            ] })
          ] })
        ] }) }) })
      }
    )
  ] });
}
export {
  TweetTopic as default
};
