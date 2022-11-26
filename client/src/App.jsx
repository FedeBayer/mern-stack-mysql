import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskContext";
import NotFound from "./pages/NotFound";
import TaskForm from "./pages/TaskForm";
import TaskPage from "./pages/TaskPage";
function App() {
  return (
    <>
      <TaskContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<TaskPage />} />
          <Route path="/new" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskContextProvider>
    </>
  );
}

export default App;
