import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthProvider';

// const PrivateRoute = ({ children }) => {
//       const{user, loading} =useContext(AuthContext);
//     if(loading) {
//         <div>Loading...</div>
//     }
//     if (!user ) {
//         return     <Navigate to ='/login'></Navigate>;
//     }
//     return children;
// };

// export default PrivateRoute;