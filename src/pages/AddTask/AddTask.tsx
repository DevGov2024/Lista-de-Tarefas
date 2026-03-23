import React, { useState } from 'react';
import styled from 'styled-components';

interface AddTaskProps {
  onAddTask: (task: {
    title: string;
    author: string;
    description: string;
    content: string;
  }) => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 50vw;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0c78d0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAddTask({
      title,
      author,
      description,
      content,
    });

    // limpar campos
    setTitle('');
    setAuthor('');
    setDescription('');
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título do post"
      />

      <Input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Autor"
      />

      <TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Resumo do post"
      />

      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Conteúdo completo"
      />

      <Button type="submit">Publicar</Button>
    </Form>
  );
};

export default AddTask;