
import { ADD_TASK, DELETE_TASK, FETCH_TASK, UPDATE_TASK, COMPLETED_TASK, COMPLETED_TASK_DELETION, RESTORED_TASK, DELETE_RESTORED_TASK } from "../../Constants/Types/Types";


const initialState={
    error:"",
    tasksArray:[],
    completedTasksArray:[],
    restoredTasksArray:[],
}

export default function ToDoReducer(state= initialState, action){

    switch (action.type) {
        case FETCH_TASK:{

            
            return{
                ...state,
                completedTasksArray: action.payload.completedTasksFromFirebase,
                tasksArray: action.payload.tasksFromFirebase,
                restoredTasksArray: action.payload.restoreTasksFromFirebase
                
            }
            
        
        }
        case ADD_TASK:{
            let newTask=[...state.tasksArray, action.payload]
            return{
                ...state,
                tasksArray: newTask
            }
        }
        case DELETE_TASK:{
            let deletionOfTask=state.tasksArray.filter((task, index)=> task.docId !== action.payload)
            let deletionOfRestoredTask=state.tasksArray.filter((task, index)=> task.docId !== action.payload)
            return{
                ...state,
                tasksArray: deletionOfTask,
            }
        }

        case UPDATE_TASK:{
            let updationOfTask=state.tasksArray.map((task, index)=> {
                if(task.docId === action.payload.docId){
                    return action.payload.data
                }else{
                    return task
                }
            })
            return{
                ...state,
                tasksArray: updationOfTask
            }
        }

        case COMPLETED_TASK:{
            let compTask=[...state.completedTasksArray, action.payload.compTask]

            let afterRemovalOfComTask=state.tasksArray.filter((task, index)=> task.docId !== action.payload.docId)
            let afterRemovalOfresTask=state.restoredTasksArray.filter((task, index)=> task.docId !== action.payload.docId)
            return{
                ...state,
                completedTasksArray: compTask,
                tasksArray: afterRemovalOfComTask,
                restoredTasksArray: afterRemovalOfresTask
            }
        }

        case COMPLETED_TASK_DELETION:{
            let deletionOfCompTask=state.completedTasksArray.filter((completedTask, index)=> completedTask.docId !== action.payload)
            return{
                ...state,
                completedTasksArray: deletionOfCompTask
            }
        }

        case RESTORED_TASK:{
            let resTask=[...state.restoredTasksArray, action.payload.task]

            let afterRemovalOfComTask=state.completedTasksArray.filter((task, index)=> task.docId !== action.payload.docId)
            return{
                ...state,
                restoredTasksArray: resTask,
                completedTasksArray: afterRemovalOfComTask
            }
        }

        case DELETE_RESTORED_TASK:{
            
            let deletionOfRestoredTask=state.restoredTasksArray.filter((task, index)=> task.docId !== action.payload)
            return{
                ...state,
                restoredTasksArray: deletionOfRestoredTask,
            }
        }

            
            
    
        default: return state;
    }
}