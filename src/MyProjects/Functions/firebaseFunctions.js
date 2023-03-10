import firebaseApp from "../Data/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp);
const signUp = (creds) => {
	return createUserWithEmailAndPassword(auth, creds.email, creds.password)
}
const signIn = (creds) => {
	return signInWithEmailAndPassword(auth, creds.email, creds.password)
}
export {
	signUp,
	signIn
};