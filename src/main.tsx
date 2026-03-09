import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import { CreateTaskPage } from "./pages/Create";
import { TaskListPage } from "./pages/List";
import { Navigate } from "react-router";


const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} >

        <Route index element={<Navigate to="/list" />} />
        <Route path="list" element={<TaskListPage />} />
        <Route path="create" element={<CreateTaskPage />} />
        {/* <Route path="edit/:id" element={<Edit/>} /> */}


        {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}
      </Route>
    
      </Routes>
    </BrowserRouter>,
);