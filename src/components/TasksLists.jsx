import React from "react";
import {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../api/apiSlice";

const TasksLists = () => {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
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

  return (
    <>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <label htmlFor={task.id}>
            Complete
            <input
              type="checkbox"
              id={task.id}
              defaultChecked={task.complete}
              onChange={(e) => {
                updateTask({
                  ...task,
                  complete: e.target.checked,
                });
              }}
            />
          </label>
        </li>
      ))}
    </>
  );
};

export default TasksLists;
