import React from 'react';

const ToDo = ({ toDo, setToDo }) => {
  const handleRemoveItem = (index) => {
    const updatedItems = toDo.filter((_, i) => i !== index);
    setToDo(updatedItems);
  };

  const handleToggleItem = (index) => {
    const updatedItems = toDo.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setToDo(updatedItems);
  };

  return (
    <>
      <ul>
        {toDo.map((item, index) => (
          <li key={index} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleItem(index)}
            />
            {item.content}
            <button onClick={() => handleRemoveItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;

