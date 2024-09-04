import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;