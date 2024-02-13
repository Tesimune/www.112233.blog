import Modal from '@/Components/Modal'
import React, { useState } from 'react'
import { useForm } from "@inertiajs/react";

function TweetTopic({ user, authURL, topics }) {
    const [open, setOpen] = useState(false)
    
    var oneTopic

    if(topics.length){
        oneTopic = topics[0];
    }else{
        oneTopic = {
            topic: "Twitter",
            tone: "Generate a nice honest comment to the twitter post provided",
        };
    }

     const { data, setData, errors, post } = useForm({
         topic: oneTopic.topic ?? "",
         tone: oneTopic.tone ?? "",
     });

     const submit = (e) => {
         e.preventDefault();
         post(route("topic.store"));
         setOpen(false)
         alert("Update xBot Topic and Tone")
     };

  return (
      <div>
          <div className="dropdown dropdown-end">
              <div
                  tabIndex={0}
                  role="button"
                  className="btn bg-slate-700 border-0 m-1"
              >
                  xBot
              </div>
              <ul
                  tabIndex={0}
                  className="dropdown-content z-90 menu p-3 shadow bg-slate-100 rounded-box w-52"
              >
                  <li>
                      <a
                          href={`${authURL}?uid=${user.id}`}
                          className="bg-slate-300 m-1"
                      >
                          Grant Access
                      </a>
                  </li>
                  <li>
                      <button
                          onClick={(e) => {
                              e.preventDefault(), setOpen(true);
                          }}
                          className="bg-slate-300 m-1"
                      >
                          Tweet Topic
                      </button>
                  </li>
              </ul>
          </div>
          <Modal
              show={open}
              onClose={(e) => {
                  e.preventDefault(), setOpen(false);
              }}
          >
              <div className="h-96 py-9">
                  <div>
                      <form onSubmit={submit}>
                          <label className="p-3">Create xBot Tweet Topic</label>
                          <div className="flex flex-col gap-3 p-3">
                              {errors.topic && (
                                  <p className="text-red-500">{errors.topic}</p>
                              )}
                              <input
                                  value={data.topic}
                                  onChange={(e) =>
                                      setData("topic", e.target.value)
                                  }
                                  type="text"
                                  placeholder="Topic"
                                  className="bg-white text-gray-950 border-2 input input-bordered input-secondary w-full"
                              />
                              {errors.tone && (
                                  <p className="text-red-500">{errors.tone}</p>
                              )}
                              <textarea
                                  value={data.tone}
                                  onChange={(e) =>
                                      setData("tone", e.target.value)
                                  }
                                  className="bg-white text-gray-950 border-2 textarea textarea-secondary w-full"
                                  placeholder="Bot Tone"
                              ></textarea>
                              <div className="flex justify-end gap-3 text-white">
                                  <span
                                      onClick={(e) => {
                                          e.preventDefault(), setOpen(false);
                                      }}
                                      className="btn bg-red-500"
                                  >
                                      Cancel
                                  </span>
                                  <button onClick={submit} className="btn">
                                      Submit
                                  </button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </Modal>
      </div>
  );
}

export default TweetTopic