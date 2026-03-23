import React from 'react';
import type { Task } from '../../types';
import styled from 'styled-components';

interface PendingTasksProps {
  tasks: Task[];
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 50vw;
`;

const ListItem = styled.li<{ completed: boolean }>`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
`;

const PendingTasks: React.FC<PendingTasksProps> = ({ tasks }) => {
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div>
      <h1>Posts Pendentes</h1>
      <List>
        {pendingTasks.map(task => (
          <ListItem key={task.id} completed={task.completed}>
            <strong>{task.title}</strong>
            <br />
            <span>{task.description}</span>
            <br />
            <small>Autor: {task.author}</small>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PendingTasks;