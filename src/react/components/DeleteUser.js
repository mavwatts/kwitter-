import React from "react";
import {Button} from "@material-ui/core";

const DeleteUser = () => {

    const handleDelete = async event => {
        console.log("clicked");
        const storedName =
    JSON.parse(localStorage?.getItem("login"))?.result?.username ?? undefined;
    
    const storedAuthToken =
    JSON.parse(localStorage?.getItem("login"))?.result?.token ?? undefined;

        const deleteUserUrl = `https://kwitter-api.herokuapp.com/users/${storedName}`
        

        try {

            const response = await fetch(deleteUserUrl, {
                method:"Delete",
                headers: { Authorization: "Bearer " + storedAuthToken},
                });
    
            
            const data = await response.json();
            console.log(data)
            console.log(response.ok)
            localStorage.clear()
            window.location.reload()
            
            
        } catch (error) {console.error(error.name); console.error(error.message)
            
        }
       
    }

    return (
        <Button onClick = {handleDelete}>Delete User</Button>
    )
}

export default DeleteUser;