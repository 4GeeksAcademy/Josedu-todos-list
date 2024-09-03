import React, { useState } from "react";

//include images into your bundle


//create your first component
const List = () => {
	const [newTask , setNewTask] = useState('');
	const [tasks, setTasks] = useState([]);

	const addTask = (e) => {
        if (e.key === 'Enter' && newTask.trim()) {
            setTasks([...tasks, newTask]);  
            setNewTask('');  
        }
    };

	const deleteTask = (indexToDelete) => {
		const updatedTasks = tasks.filter((task, index) => index !== indexToDelete);
		setTasks(updatedTasks);
	};

	return (
			< div className=" Container">
				<h1 className=" display-1 text-secondary text-center">todos</h1>
				<div className="row justify-content-center">
					<div className= "col-6 card">
						<input className="form-control" 
							value={newTask} 
							onChange={(e)=>{setNewTask(e.target.value)}} 
							onKeyPress={addTask}  
							type="text" 
							placeholder="Nueva Tarea" 
							aria-label="default input example">
						</input>
			{tasks.length === 0 ? (
        <p className="empty-list-message form-text fw-light">No hay tareas, añadir tareas</p>
      ) : (
						<>
							<ul className="task-list list-group list-group-flush">
								{tasks.map((task, index) => (
									<li className="task-item list-group-item" key={index}>
										{task}
										<button className="delete-btn" onClick={() => deleteTask(index)}>
											X
										</button>
									</li>
								))}
							</ul>
							<p className="tareasPendientes form-text fw-light">Tareas pendientes: {tasks.length}</p>
						</>
					)}
				</div>
			</div>
		</div>
  );
};

export default List;
