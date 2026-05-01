import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import { v4 as uuidv4 } from "uuid";
import Footer from "./components/footer";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFinished, setShowFinished] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    settodos(storedTodos);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const handleEdit = (id) => {
    const item = todos.find((t) => t.id === id);
    if (item) {
      settodo(item.todo);
      settodos(todos.filter((t) => t.id !== id));
    }
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this todo?")) {
      settodos(todos.filter((t) => t.id !== id));
    }
  };

  const handleAdd = () => {
    if (todo === "") {
      alert("Please enter a todo");
      return;
    }
    settodos([...todos, { todo, id: uuidv4(), isCompleted: false }]);
    settodo("");
  };

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleCheck = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    settodos(updatedTodos);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 p-5 rounded-xl bg-green-100 min-h-[80vh]">
        <div className="addTodo">
          <h2 className="text-lg font-bold">Add a Todo</h2>

          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder="Enter a new todo..."
            className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 mt-3 w-full block"
          />
          <button
            onClick={handleAdd}
            className="bg-green-400 text-white px-3 py-2 rounded cursor-pointer hover:bg-green-600 w-full mt-2 font-semibold"
          >
            Save
          </button>
        </div>

        <div className="flex items-center gap-2 my-4">
          <input
            type="checkbox"
            id="showFinished"
            checked={showFinished}
            onChange={(e) => setShowFinished(e.target.checked)}
            className="w-4 h-4 accent-green-400 cursor-pointer"
          />
          <p className="font-medium text-gray-700">Show Completed Todos</p>
        </div>

        <h2 className="text-lg font-bold">Your Todos:</h2>

        <div className="todos">
          {todos.length === 0 && (
            <p className="text-gray-600 m-6">
              No todos to display. Add some todos to get started!
            </p>
          )}

          {todos
            .filter((item) => showFinished || !item.isCompleted)
            .map((item) => (
              <div
                key={item.id}
                className="todo flex m-1.5 gap-4 justify-between items-center flex-wrap"
              >
                <div className="flex gap-3 items-center flex-1 min-w-0">
                  <input
                    type="checkbox"
                    id={`checkbox-${item.id}`}
                    checked={item.isCompleted}
                    onChange={() => handleCheck(item.id)}
                    className="w-5 h-5 accent-green-400 cursor-pointer shrink-0"
                  />
                  <div
                    className={`text break-words ${
                      item.isCompleted ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {item.todo}
                  </div>
                </div>

                <div className="button flex gap-2 shrink-0">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-green-400 text-white px-3 py-1 rounded-3xl cursor-pointer hover:bg-green-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-green-400 text-white px-3 py-1 rounded-3xl cursor-pointer hover:bg-green-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;