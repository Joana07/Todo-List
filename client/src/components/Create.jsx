import React, { useState } from 'react';

const Create = ({ toDo, setToDo }) => {
  const [content, setContent] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (content.trim() === '') return;
    setToDo([...toDo, { content: content, completed: false }]);
    setContent('');
  };

  return (
    <>
      <form onSubmit={handleAddItem}>
        <input type="text" placeholder="Get MERN black belt." value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Create;


