import React from "react";
import { useCreateTaskMutation } from "../api/apiSlice";

const TaskForm = () => {
  const [createTask] = useCreateTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const complete = e.target.elements.complete.checked;

    createTask({
      name,
      description,
      complete,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="text" name="description" />
        <input type="checkbox" name="complete" />
        <button>Add Task</button>
      </form>
    </>
  );
};

export default TaskForm;
