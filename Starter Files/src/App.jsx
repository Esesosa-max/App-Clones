import { useEffect, useState } from "react";

import Chat from "./Chat";
import Form from "./Form";
import Login from "./Login";
import Navbar from "./Navbar";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

function App() {
  const [input, setInput] = useState();
  const [user, setUser] = useState();
  const [chats, setChats] = useState();

  return (
    <div>
      <Navbar></Navbar>
      <Login></Login>
      <Chat></Chat>
      <Form></Form>
    </div>
  );
}

export default App;
