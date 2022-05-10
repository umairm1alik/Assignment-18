import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTask, fetchTasks, deleteTask, updateTask, completedTask, deleteCompTask, restoreTask, deleteRestoredTask } from "../../Store/Actions/ToDoAction";





export default function UseToDoList() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const [task, setTask] = useState('');
    const [flag, setFlag] = useState(false);
    const [loader, setLoader] = useState(false);
    const [updateTaskId, setUpdateTaskId] = useState();
    const dispatch = useDispatch();


    // Store Data
    const tasksFromStore = useSelector((store) => store.ToDoReducer.tasksArray);
    const completedTasksFromStore= useSelector((store) => store.ToDoReducer.completedTasksArray)
    const restoredTasksFromStore= useSelector((store) => store.ToDoReducer.restoredTasksArray)
    
    

    const taskAdditionHandler = () => {
        if (!task) {
            alert("Enter Task")
            return
        }
        let newTask = { task };
        dispatch(addTask(newTask));
        setTask("");
    }

    


    useEffect(() => {
        dispatch(fetchTasks(setLoader))
    },[]);

    // useEffect(() => {
    //     dispatch(fetchTasks(setLoader))
    // }, []);

    const deleteTaskHandler = (docId) => {
        dispatch(deleteTask(docId, setLoader));
    }
    const updateHandler=(item, docId)=>{  
        setTask(item);
        setFlag(true);
        setUpdateTaskId(docId)

    }
    const ctaUpateHandler = () => { 
        if(task!=""){
            let taskToBeUpdate={
                task 
            }
            dispatch(updateTask(updateTaskId,taskToBeUpdate))
        }
        
        
        setTask("")
        setFlag(false)
    }
    const completedTaskHandler=(taskCompleted, docId) => {
        console.log(docId);
        let compTask={taskCompleted}
        dispatch(completedTask(docId, compTask))
        
    }

    const deleteCompTaskHandler=(docId) =>{
        
        dispatch(deleteCompTask(docId));
    }

    const restoreTaskHandler=(docId, restoredTask) => {
        
        let task={restoredTask}
        dispatch(restoreTask(docId, task))
    }
    const deleteRstoredTaskHandler=( docId ) => {
        dispatch(deleteRestoredTask(docId));
    }
    
    return {
        date,
        day,
        month,
        year,
        task,
        setTask,
        flag,
        ctaUpateHandler,
        taskAdditionHandler,
        tasksFromStore,
        loader,
        deleteTaskHandler,
        updateHandler,
        completedTaskHandler,
        completedTasksFromStore,
        deleteCompTaskHandler,
        restoreTaskHandler,
        restoredTasksFromStore,
        deleteRstoredTaskHandler,
        
    }

}