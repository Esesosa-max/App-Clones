import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

const useLocal = (todos, setTodos) => {
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (querySnapshot) => {
      setTodos(querySnapshot.docs);
    });
  }, []);
  return;
};

export default useLocal;
