import { useNavigate } from "react-router-dom"
import React from "react"

export default function SignOut() {
    const history = useNavigate() 
    // const handleSignOut =() =>{
    //     signOut (database).then( val=>{
    //             console.log(val,)
    //             history('/')
    //         }
    //     )
    // }
    return (
      <div>
       <button 
    //    onClick={handleSignOut}
       > Sign Out</button>
      </div>
    );
}
  