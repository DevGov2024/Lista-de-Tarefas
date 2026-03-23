import React, { useState } from 'react';
import styled from 'styled-components';
import type { Task } from '../../types';

interface TaskListProps {
  tasks: Task[];
  onRemoveTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
  isAuthenticated: boolean;
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

const Button = styled.button`
  background-color: #0c78d0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  margin-right: 5px;
`;

const TaskList: React.FC<TaskListProps> = ({ tasks, onRemoveTask, onToggleTask, isAuthenticated }) => {
  const [openPostId, setOpenPostId] = useState<number | null>(null);

  const togglePost = (id: number) => {
    setOpenPostId(openPostId === id ? null : id);
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} completed={task.completed}>

          <strong>{task.title}</strong>
          <br />
          <span>{task.description}</span>
          <br />
          <small>Autor: {task.author}</small>

          {/* BOTÕES */}
          <div style={{ marginTop: '10px' }}>
            <Button onClick={() => togglePost(task.id)}>
              {openPostId === task.id ? 'Fechar' : 'Ver post completo'}
            </Button>

            {isAuthenticated && (
              <Button onClick={() => onRemoveTask(task.id)}>
                Remover
              </Button>
            )}
          </div>

          {/* CONTEÚDO COMPLETO */}
          {openPostId === task.id && (
            <div style={{ marginTop: '10px' }}>
              <hr />
              <p>{task.content}</p>
            </div>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;