"use client"

import { useEffect } from "react";

function User() {

    useEffect(() => {
        alert('Use Client component')
    }, [])


    return (
        <div>User</div>
    )
}

export default User