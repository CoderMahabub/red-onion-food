import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const SignInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(user.result)
            })
    }


    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user)
            })
    }


    //State Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, [])


    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    //Return All
    return {
        SignInUsingGoogle,
        signInUsingGithub,
        user,
        logOut
    }
}
export default useFirebase;