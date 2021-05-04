import React from 'react';
import { useState } from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';


const App = () => {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor\'s Appointment',
      day: 'May 1st at 2:20pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Going for a presentation for the new app',
      day: 'April 7 9am',
      reminder: true
    },
    {
      id: 3,
      text: 'Go to the bank for BVN',
      day: 'April 5th at 7am',
      reminder: false
    }
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task }
    setTasks([...tasks, newTask]);
  }

  // Delete Task function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? <Tasks tasksArray={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <h3>No task to show. Try adding some</h3>}
    </div>
  );
}

export default App;
