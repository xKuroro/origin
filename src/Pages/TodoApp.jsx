import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';
import '../index.css';

function TodoApp() {
  const [dataEdit, setDataEdit] = useState('');
  const [editedValue, setEditedValue] = useState(null);
  const [edit, setEdit] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([
    {
      id: uuid(),
      text: 'Doctors Appointment',
      day: 'Feb 5th at 3:34am',
      reminder: true,
    },
    {
      id: uuid(),
      text: 'Meeting at school',
      day: 'Feb 6th at 1:20pm',
      reminder: true,
    },
    {
      id: uuid(),
      text: 'Killing Time',
      day: 'March 3 at 4:20pm',
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    if (tasks.length >= 5) {
      alert('Maximum Task you can handle');
    } else {
      const id = uuid();
      const newTask = { id, ...task };
      setTask([...tasks, newTask]);
      console.table([...tasks, newTask]);
    }
  };
  // delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  // toggle reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)),
    );
  };
  // edit
  const onEdit = (data) => {
    setEdit(true);
    console.log(data);
    setDataEdit(data);
    setEditedValue(data);
    setShowAddTask(true);
  };

  const onClick = (data) => {
    const index = tasks.findIndex((task) => {
      console.log(task.id);
      return task.id === editedValue.id;
    });

    const cloneTask = [...tasks];
    cloneTask[index] = data;
    console.log(cloneTask);
    setTask(cloneTask);
    setDataEdit('');
    setEditedValue(null);
    setEdit(false);
  };
  useEffect(() => {
    if (showAddTask === false) {
      console.log('render');
      setEditedValue(null);
    }
  }, [showAddTask]);
  return (
    <div className="container">
      <Header
        task={tasks}
        setTask={setTask}
        dataEdit={dataEdit}
        setDataEdit={setDataEdit}
        onClick={onClick}
        onAddTask={() => {
          setShowAddTask(!showAddTask);
        }}
        showAddTask={showAddTask}
      />

      {showAddTask && (
      <AddTask
        onAdd={addTask}
        edit={edit}
        editedValue={editedValue}
        onClick={onClick}
      />
      )}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onEdit={onEdit}
          onToggle={toggleReminder}
        />
      ) : (
        'no task left'
      )}
    </div>
  );
}

export default TodoApp;
