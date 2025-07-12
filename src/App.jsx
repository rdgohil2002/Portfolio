// import React, { useState } from "react";
// import UserForm from "./components/UserForm";
// import UserList from "./components/UserList";

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [editingUser, setEditingUser] = useState(null);

//   const addUser = (user) => {
//     setUsers([...users, { ...user, id: Date.now() }]);
//   };

//   const updateUser = (updatedUser) => {
//     setUsers(
//       users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
//     );
//     setEditingUser(null);
//   };

//   const deleteUser = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>React CRUD App</h1>
//       <UserForm
//         addUser={addUser}
//         editingUser={editingUser}
//         updateUser={updateUser}
//       />
//       <UserList
//         users={users}
//         deleteUser={deleteUser}
//         setEditingUser={setEditingUser}
//       />
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import UserForm from "./reactcrud/UserForm";
// import UserList from "./reactcrud/UserList";

// const App = () => {
//   const [todos, setTodos] = useState([
//     { id: 1, name: "gohil", email: "gohil@gmail.com" },
//     { id: 2, name: "ranjit", email: "ranjit@gmail.com" },
//     { id: 3, name: "dhirubhai", email: "dhirubhai@gmail.com" },
//   ]);

//   const [id, setId] = useState("");
//   console.log(id);

//   const deletebtn = (id) => {
//     setTodos(todos.filter((d) => d.id !== id));
//   };

//   return (
//     <div>
//       <h1>REact Todos</h1>
//       {/* <button onClick={() => deletebtn(1)} className="bg-amber-600">
//         delete
//       </button> */}
//       <UserForm todos={todos} setTodos={setTodos} id={id} setId={setId} />
//       <UserList todos={todos} deletebtn={deletebtn} setId={setId} />
//     </div>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import Home from "./Portfolio/Home";
import Navbar from "./Portfolio/Navbar";
import Experience from "./Portfolio/Experience";
import ExperienceTimeline from "./Portfolio/Experience";
import Skills from "./Portfolio/Skills";
import Contact from "./Portfolio/Contact";
import Footer from "./Portfolio/Footer";
import Project from "./Portfolio/Project";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="font-serif">
      <Navbar />
      <div>
        <Home />
        {/* <Experience /> */}
        <ExperienceTimeline />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
