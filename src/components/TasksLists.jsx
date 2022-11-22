import React from "react";
import { useGetTasksQuery } from "../api/apiSlice";

const TasksLists = () => {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();

  if (isLoading) {
    return (
      <>
        <div>Cargando datos...</div>
      </>
    );
  } else if (isError) {
    return (
      <>
        <div>Error: {error.message}</div>
      </>
    );
  }

  console.log();

  return (
    <>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button>Delete</button>
          <label htmlFor={task.id}>
            Complete
            <input type="checkbox" id={task.id} />
          </label>
        </li>
      ))}
    </>
  );
};

export default TasksLists;
