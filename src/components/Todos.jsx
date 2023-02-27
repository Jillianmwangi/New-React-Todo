import './Todos.css';


function Todos() {
  const [data, setData] = useState([
     {
      id: 1,
      title: "Clean Today",
      description: "Do the cleaning today",
      status: "pending",     
     };
     {
      id: 2,
      title: "Cook",
      description: "Cook the meal",
      status: "pending",     
     };
     {
      id: 3,
      title: "study",
      description: "Study for egzamz",
      status: "pending",     
     };
  ]);
  
  return (
    <div className="todoCont">
      <div className="Header">
        <div className="welcome">Welcome Back</div>
        <div className="createBtn">+ Add Task</div>
      </div>
      <div className="todoList">
        {data.map((item)=>{
          return(
            


          )

        })}
      </div>

   

    </div>
  );
}

export default Todos;
