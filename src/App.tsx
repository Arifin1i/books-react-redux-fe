import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { setLoading, setUser } from './redux/features/user/userSlice';
import { auth } from "./firebas/firebase.init";


function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      <MainLayout></MainLayout>
    </div>
  );
}

export default App;
