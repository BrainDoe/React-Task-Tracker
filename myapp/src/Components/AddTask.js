import React from 'react';
import {useState} from 'react';

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  // The Submit function
  const submit = (e) => {
    e.preventDefault();

    if(!text){
      alert('Please add a task');
      return;
    }

    onAdd({text, day, reminder});

    // Reset State
    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <form  className='add-form' onSubmit={submit} >
      <div className='form-control'>
          <label>Task</label>
          <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className='form-control'>
          <label>Day & time</label>
          <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className='form-control form-control-check'>
          <label>Set Reminder</label>
          <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder} />
      </div>
      <div className='form-control'>
        <input type='submit' value='Save Task' className='btn btn-block' />
      </div>
    </form>
  )
}

export default AddTask
