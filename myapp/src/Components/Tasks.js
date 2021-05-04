import React from 'react';
import Task from './Task';

function Tasks({tasksArray, onDelete, onToggle}) {

  return (
    <>
      {tasksArray.map((task) => (
        <Task key={task.id} singleTask={task} toDelete={onDelete} toToggle={onToggle} />
      ))}
    </>
  )
}

export default Tasks
