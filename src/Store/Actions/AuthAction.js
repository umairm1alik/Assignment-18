import { LOGIN, LOGOUT, SIGNUP } from "../../Constants/Types/Types"
import { db, auth } from "../../Config/Firebase";

export const doLogin = (user) => async (dispatch) => {


    try {
        const userCredential = await auth.signInWithEmailAndPassword(
            user.email,
            user.password
        );
        var userData = userCredential.user;

        if (userData) {
            dispatch({
                type: LOGIN,
                payload: userData,
            });
        }

    } catch (error) {
        alert(error)
    }
}

export const doLogout = () => async (dispatch) => {
    try {
        
        await auth.signOut();
        dispatch({
            type: LOGOUT,
        });
    } catch (error) {

        alert(error)
    }
};

export const doSignup = (user) => async (dispatch) => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(
            user.email,
            user.password
        );
        var userData = userCredential.user;
        // let resValue = await db.collection("users").add({
        //     ...user,
        //     id: userData.id
        // });

        if (userData) {
            dispatch({
                type: LOGIN,
                payload: userData,
            });
        }
    } catch (error) {

        alert(error)
    }
};