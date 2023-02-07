import { useState } from "react";
import "./App.css";
import { Users } from "./users";

function App() {
    const [query, setQuery] = useState("");
    return (
      <div className="app">
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <ul className="list">
          {Users.filter((asd) =>
            asd.first_name.toLowerCase().includes(query)
          ).map((user) => (
            <li className="listItem" key={user.id}>
              {user.first_name}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default App;

// function App() {
//   const [query, setQuery] = useState("");
//   return(
//     <div className="app">
//       <input type="text" placeholder="Search" className="search" onChange={e=> setQuery(e.target.value)}/>

//       <ul className="list">
//       {Users.map((user) => (
//         <li key={user.id} className="listItem">{user.first_name}</li>
//       ))}


//         {/* <li className="listItem">Watch</li>
//         <li className="listItem">Phone</li>
//         <li className="listItem">Apple</li>
//         <li className="listItem">Football</li>
//         <li className="listItem">Fish</li>
//         <li className="listItem">America</li>
//         <li className="listItem">Plane</li> */}

//       </ul>
//     </div>
//   );
// }

// export default App;