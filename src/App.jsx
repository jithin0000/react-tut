import { useEffect, useState } from "react";
import "./App.css";

const taksList = [
  {
    id: 1,
    task: "task name",
    asigned_to: ["Adam Harpe", "Test User"],
    assigned_by: "Test User",
    created_on: "Oct 19th, 2022 5:41am",
    due: "Oct 21st, 2022 8:00am",
    priority: 1,
  },
  {
    id: 2,
    task: "task 2",
    asigned_to: ["Adam Harpe", "Test User"],
    assigned_by: "Test User",
    created_on: "Oct 19th, 2022 5:41am",
    due: "Oct 21st, 2022 8:00am",
    priority: 0,
  },
];

function App() {
  const [taskArray, setTaskArray] = useState([]);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    setTaskArray(taksList);
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();


    const newTaskArray = [
      ...taskArray,
      {
        id: Math.floor(Math.random() * 10000),
        task: taskName,
        asigned_to: ["Adam Harpe", "Test User"],
        assigned_by: "Test User",
        created_on: "Oct 19th, 2022 5:41am",
        due: "Oct 21st, 2022 8:00am",
        priority: 0,
      },
    ];
    setTaskArray(newTaskArray)
  };


  const deleteTask = (taskId) => {
    console.log(taskId)
    console.log(taskArray)
    const filteredArray = taskArray.filter( (t) => t.id !== taskId)
    console.log(filteredArray)
    setTaskArray(filteredArray)

  } 


  return (
    <div className="container">
      <h4 className="my-3">Task List</h4>

      <button className="btn btn-primary btn-small"> Add Task </button>

      <div className="list-group">
        {
        taskArray.map((item) => {
          return (

            <div key={item.id} className="d-flex">
              <li className="list-group-item"> {item.task} </li>
              <button type="button"
              onClick={(e) => deleteTask(item.id) }
              className="btn btn-danger">delete</button>
            </div>

          );
        })}
      </div>

      {/* // form */}
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="task">Task</label>
            <input
              type="text"
              className="form-control"
              name="task"
              id="task"
              aria-describedby="helpId"
              placeholder="Enter task name"
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
            />

            <button type="submit" className="btn btn-primary mt-2">
              add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
