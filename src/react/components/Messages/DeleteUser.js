import React from "react";
import {Button} from "@material-ui/core";

const DeleteUser = () => {

    const handleDelete = () => {
        console.log("clicked");
    }

    return (
        <Button onClick = {handleDelete}>Delete User</Button>
    )
}

export default DeleteUser;