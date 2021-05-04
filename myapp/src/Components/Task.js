import React from 'react';

function Task({singleTask, toDelete, toToggle}) {
  return (
    <div className={`task ${singleTask.reminder ? 'reminder' : '' }`} onDoubleClick={() => toToggle(singleTask.id)} >
      <h3>{singleTask.text} <i onClick={() => toDelete(singleTask.id)} style={{color: 'red', fontSize: '20px', cursor: 'pointer'}}>&times;</i></h3>
      <p>{singleTask.day}</p>
    </div>
  )
}

export default Task
