import { dblClick } from "@testing-library/user-event/dist/click";
import { ADD_TASK, DELETE_TASK, FETCH_TASK, UPDATE_TASK, COMPLETED_TASK, COMPLETED_TASK_DELETION, RESTORED_TASK, DELETE_RESTORED_TASK } from "../../Constants/Types/Types.js";

import { db } from "../../Config/Firebase"


export const addTask = (data) => async (dispatch) => {
    try {
        await db.collection("UncompleteTask").add(data);
        dispatch({
            type: ADD_TASK,
            payload: data
        })
    } catch (error) {
        console.log("Error in firebase", error);
    }
}

export const fetchTasks = (setLoader) => async (dispatch) => {
    try {
        setLoader(true);
        let fetchedTasks = await db.collection("UncompleteTask").get();
        let fetchedCompletedTasks = await db.collection("CompletedTask").get();
        let fetchedRestoredTasks = await db.collection("RestoredTask").get();

        let tasksFromFirebase = [];
        let completedTasksFromFirebase = [];
        let restoreTasksFromFirebase = [];

        // Uncomplete tasks
        fetchedTasks.forEach((doc) => {
            tasksFromFirebase.push({
                docId: doc.id,
                ...doc.data()
            })
        });

        // completed tasks
        fetchedCompletedTasks.forEach((doc) => {
            completedTasksFromFirebase.push({
                docId: doc.id,
                ...doc.data()
            })
        });

        // restored tasks
        fetchedRestoredTasks.forEach((doc) => {
            restoreTasksFromFirebase.push({
                docId: doc.id,
                ...doc.data()
            })
        });

        


        dispatch({
            type: FETCH_TASK,
            payload: {tasksFromFirebase, completedTasksFromFirebase, restoreTasksFromFirebase}
        })
    } catch (error) {
        console.log("Error in firebase", error);
    }
    finally {
        setLoader(false)
    }
}

//Dummy code
// export const fetchTasks = (setLoader) => async (dispatch) => {
//     try {
//         setLoader(true);
//         let fetchedTasks = await db.collection("UncompleteTask").get();
//         let fetchedCompletedTasks = await db.collection("CompletedTask").get();
//         let fetchedRestoredTasks = await db.collection("RestoredTask").get();
        
//         let uncompleteTasksFromFirebase = [];
//         let restoreTasksFromFirebase = [];
//         let completedTasksFromFirebase = [];

//         // Uncomplete tasks
//         fetchedTasks.forEach((doc) => {
//             uncompleteTasksFromFirebase.push({
//                 docId: doc.id,
//                 ...doc.data()
//             })
//         });
//         // completed tasks
//         fetchedCompletedTasks.forEach((doc) => {
//             completedTasksFromFirebase.push({
//                 docId: doc.id,
//                 ...doc.data()
//             })
//         });

//         // restored tasks
//         fetchedRestoredTasks.forEach((doc) => {
//             restoreTasksFromFirebase.push({
//                 docId: doc.id,
//                 ...doc.data()
//             })
//         });
//         let tasksFromFirebase = [...uncompleteTasksFromFirebase, ...restoreTasksFromFirebase];
        


//         dispatch({
//             type: FETCH_TASK,
//             payload: {tasksFromFirebase, completedTasksFromFirebase}
//         })
//     } catch (error) {
//         console.log("Error in firebase", error);
//     }
//     finally {
//         setLoader(false)
//     }
// }

export const deleteTask = (docId, setLoader) => async (dispatch) => {
    try {
        setLoader(true)
        await db.collection("UncompleteTask").doc(docId).delete();
        await db.collection("RestoredTask").doc(docId).delete();
        dispatch({
            type: DELETE_TASK,
            payload: docId
        })

    } catch (error) {
        console.log("Error in firebase", error);
    }
    finally {
        setLoader(false)
    }
}

export const updateTask = (docId, data) => async (dispatch) => {
    try {
        await db.collection("UncompleteTask").doc(docId).update(data);
        await db.collection("RestoredTask").doc(docId).update(data);
        dispatch({
            type: UPDATE_TASK,
            payload: { docId, data }
        })

    } catch (error) {
        console.log("Error in firebase", error);
    }

}


export const completedTask = (docId, compTask) => async (dispatch) => {

    try {
        
        await db.collection("CompletedTask").add(compTask);
        await db.collection("UncompleteTask").doc(docId).delete();
        await db.collection("RestoredTask").doc(docId).delete();
        dispatch({
            type: COMPLETED_TASK,
            payload: { docId, compTask }
        })

    } catch (error) {
        console.log("Error in firebase", error);
    }

}

export const deleteCompTask = (docId) => async (dispatch) => {
    try {
        await db.collection("CompletedTask").doc(docId).delete();
        dispatch({
            type: COMPLETED_TASK_DELETION,
            payload: docId
        })

    } catch (error) {
        console.log("Error in firebase", error);
    }
    
}

export const restoreTask = (docId, task) => async (dispatch) => {
    try {
        await db.collection("RestoredTask").add(task);
        await db.collection("CompletedTask").doc(docId).delete();
        dispatch({
            type: RESTORED_TASK,
            payload: {docId, task}
        })
    } catch (error) {
        console.log("Error in firebase", error);
    }
}

export const deleteRestoredTask = (docId, setLoader) => async (dispatch) => {
    try {
        
        await db.collection("RestoredTask").doc(docId).delete();
        dispatch({
            type: DELETE_RESTORED_TASK,
            payload: docId
        })

    } catch (error) {
        console.log("Error in firebase", error);
    }
    
}