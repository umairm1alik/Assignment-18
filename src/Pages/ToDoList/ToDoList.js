import "./ToDoList.css";

import UseToDoList from "./UseToDoList";

export default function ToDoList() {

    const { date, day, month, year, task, setTask, flag, loader, ctaUpateHandler, taskAdditionHandler, deleteTaskHandler, tasksFromStore, updateHandler, completedTaskHandler, completedTasksFromStore, deleteCompTaskHandler, restoreTaskHandler, restoredTasksFromStore, deleteRstoredTaskHandler } = UseToDoList();
    return (
        <div className="col-9 mt-3 toDoSection">
            <h4>My Day</h4>
            <span className="date">{`${month}/${day}/${year}`}</span>
            <div className='inputDiv'>
                <input type='text' placeholder='Add a task' value={task} className='inputFieldList' onChange={(e) => setTask(e.target.value)} /> <br />
                <i class="bi bi-calendar3 "></i>
                <i class="bi bi-bell m-2"></i>
                <i class="bi bi-arrow-repeat"></i>
                {flag ?
                    <button className='addTaskBtn' onClick={ctaUpateHandler}>Update</button>
                    :
                    <button className='addTaskBtn' onClick={taskAdditionHandler}>Add</button>
                }


                {/* End of Input Div */}
            </div>
            <div>
                <table className="tableStyle">
                    {tasksFromStore.map((tasksArray, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <td><button className='checkBtn' onClick={() => completedTaskHandler(tasksArray.task, tasksArray.docId)}><i class="bi bi-check2-circle" ></i></button></td>
                                    <td>{tasksArray.task}</td>
                                    <td>{tasksArray.docId}</td>
                                    <td><button className='updateBtn' onClick={() => updateHandler(tasksArray.task, tasksArray.docId)}><i class="bi bi-pen"></i></button></td>
                                    <td><button className='delBtnList' onClick={() => deleteTaskHandler(tasksArray.docId)} ><i class="bi bi-x-circle" id="delIcon"></i></button></td>

                                </tr>
                            </tbody>
                        )

                    })}
                    {/* Experiment start */}

                    {restoredTasksFromStore.map((restoredTasksArray, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <td><button className='checkBtn' onClick={() => completedTaskHandler(restoredTasksArray.restoredTask, restoredTasksArray.docId)}><i class="bi bi-check2-circle" ></i></button></td>
                                    <td>{restoredTasksArray.restoredTask}</td>
                                    <td>{restoredTasksArray.docId}</td>
                                    <td><button className='updateBtn' onClick={() => updateHandler(restoredTasksArray.restoredTask, restoredTasksArray.docId)}><i class="bi bi-pen"></i></button></td>
                                    <td><button className='delBtnList' onClick={() => deleteRstoredTaskHandler(restoredTasksArray.docId)} ><i class="bi bi-x-circle" id="delIcon"></i></button></td>

                                </tr>
                            </tbody>
                        )

                    })}

                    {/* Experiment End */}

                    {loader && <div>Loading...</div>}

                </table>
                <h1>Completed Tasks</h1>
                <table className="tableStyle">
                    {completedTasksFromStore.map((completedTasksArray) =>{

                        return(
                            <tbody>
                                <tr className="lineThrough">
                                    <td><button id="restoreBtn" onClick={() => restoreTaskHandler( completedTasksArray.docId, completedTasksArray.taskCompleted )}><i class="bi bi-check2-circle" ></i></button></td>
                                    <td>{completedTasksArray.taskCompleted}</td>
                                    <td>{completedTasksArray.docId}</td>
                                    <td><button className='delBtnList' onClick={() => deleteCompTaskHandler(completedTasksArray.docId)} ><i class="bi bi-x-circle" id="delIcon"></i></button></td>

                                </tr>
                            </tbody>
                        )

                        })}
                </table>
            </div>
        </div>
    );
}