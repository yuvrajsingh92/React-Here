import { useState } from "react";

const Form = ({ onAddNote }) => {
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onAddNote({ task, details });

    setTask("");
    setDetails("");
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Create New Task
        </h2>

        <form
          onSubmit={submitHandler}
          action=""
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-600">
              Task Title
            </label>
            <input
              type="text"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              name="task_title"
              id="task_title"
              placeholder="Enter Your Task"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-600">
              Description
            </label>
            <textarea
              name="task_desc"
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              id="task_desc"
              rows="4"
              placeholder="Describe Your Task"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white shadow-md shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 hover:shadow-none active:scale-[0.98]"
          >
            Submit Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
