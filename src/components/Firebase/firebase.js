import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDmDgLdGb8ibRjWeXOLihQaVyeXeZt7VEM",
  authDomain: "marvel-quiz-6f10c.firebaseapp.com",
  projectId: "marvel-quiz-6f10c",
  storageBucket: "marvel-quiz-6f10c.appspot.com",
  messagingSenderId: "194855224840",
  appId: "1:194855224840:web:711c699283f352db2973bd",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  loginUser = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
    // signoutUser = () => this.auth.signOut();
  };
}
export default Firebase;
