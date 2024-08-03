'use client'
import { useEffect, useState } from "react";
import { IUser } from "@/lib/types";
import axios from "axios";
import Link from "next/link";

export const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        axios.get("/users")
            .then(res => {
                setUsers(res.data.users)
            })
    }, [])

    const handleDeleteAll = () => {
        axios.delete('/users')
            .then(res => {
                setUsers([])
            })
    }

    return <>
        <div className="container">
            {users.length ? <button className="button-delete-all" type="button" onClick={handleDeleteAll}>
                Delete all users
            </button> : ''}
            <h3 className="title">User List</h3>
            <div className="user-grid">
                {users.map(elm => (
                    <div key={elm.id} className="user-card">
                        <p className="user-info">Name: {elm.name}</p>
                        <p className="user-info">Surname: {elm.surname}</p>
                        <strong className="salary">$ {elm.salary}</strong>
                        <Link href={`/users/${elm.id}/details`}>
                            <button className="button">Account</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    </>
}