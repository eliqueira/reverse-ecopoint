// import React from 'react'
// import FormUser from "./FormUser";
// import {BsTrash} from "react-icons/bs"
// import { useEffect,useState } from 'react'

// const ApiIntegrantion = () => {
// const [users, setUsers] = useState(0);

// useEffect(() => {
//             fetch("http://localhost/reverse-api/api/user/select-all")
//             .then((response) => response.json())
//             .then((data) => setUsers(data));
//         }, []);

//         const handleTrashClick = (userId) => {
//           const formData = new FormData();
//           formData.append('id', userId);
//           const urlDelete = "http://localhost/reverse-api/api/user/delete";
//           fetch(urlDelete, {
//             method: 'POST',
//             body: formData
//           })
//             .then((response) => response.json())
//             .then((data) => {
//               alert(data.message)
//               let userFiltered = users.filter((user) => { return user.id !== userId});
//               setUsers(userFiltered)
//             });
//         }
        

//   return (
//     <>
//     <FormUser setUsers={setUsers} users={users}/>
//     {users &&
//       users.map((user) =>{
//         console.log(user)
//       return(
//         <div key={user.id}>
//           <h1>{user.name}</h1>
//           <p>{user.email}</p>
//           <BsTrash onClick={() => handleTrashClick(user.id)}/>
//         </div>
//       )
//       })
//     }
//     </>
//   )
// }

// export default ApiIntegrantion