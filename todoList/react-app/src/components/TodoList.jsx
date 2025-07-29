import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [inputText, setInputText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoList));
  }, [todoList]);

  function handleAdd() {
    if (!inputText.trim()) {
      return;
    }
    setTodoList([...todoList, inputText.trim()]);
    setInputText("");
  }

  function handleDelete(index) {
    setTodoList(todoList.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setInputText(todoList[index]);
    setEditIndex(index);
    setIsEditing(true);
  }

  function handleUpdate() {
    if (!inputText.trim()) return;

    const updatedList = todoList.map((item, i) =>
      i === editIndex ? inputText.trim() : item
    );
    setTodoList(updatedList);
    setInputText("");
    setIsEditing(false);
    setEditIndex(null);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      isEditing ? handleUpdate() : handleAdd();
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Todo List</h1>

        <div className="flex gap-2">
          <input
            className="flex-1 border-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            type="text"
            placeholder="Enter your task"
          />
          {isEditing ? (
            <button
              onClick={handleUpdate}
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 text-white rounded-lg"
            >
              Update
            </button>
          ) : (
            <button
              onClick={handleAdd}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 text-white rounded-lg"
            >
              Add
            </button>
          )}
        </div>

        <div className="mt-6 space-y-3">
          {todoList.length === 0 && (
            <p className="text-gray-500 text-center">No tasks yet.</p>
          )}
          {todoList.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              <p className="text-gray-700">{item}</p>
              <div className="space-x-2">
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
