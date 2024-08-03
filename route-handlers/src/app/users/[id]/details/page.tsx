"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Props } from "@/lib/types"

export default function Page({ params: { id } }: Props) {
    const router = useRouter()
    const [user, setUser] = useState({ name: "", surname: "", salary: 0 })

    useEffect(() => {
        axios.get(`/users/${id}`).then((res) => {
            setUser(res.data)
        })
    }, [id])

    const handleUpdate = () => {
        axios
            .put(`/users/${id}`, user)
            .then(res => {
                console.log(res.data)
                router.push('/')
            })
    }

    const handleDelete = () => {
        axios
            .delete(`/users/${id}`)
            .then(res => {
                console.log(res.data)
                router.push('/')
            })
    }

    return <>

        <div className="container">
            <h3 className="title">User Details No. {id}</h3>

            <form>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="input-field"
                        placeholder="Name"
                        value={user.name}
                        onChange={e => setUser({ ...user, name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="surname"
                        className="input-field"
                        placeholder="Surname"
                        value={user.surname}
                        onChange={e => setUser({ ...user, surname: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        name="salary"
                        className="input-field"
                        step={1000}
                        placeholder="Salary"
                        value={user.salary}
                        onChange={e => setUser({ ...user, salary: +e.target.value })}
                    />
                </div>
                <button className="button button-update" onClick={handleUpdate} type="button">Update</button>
                <button className="button button-delete" onClick={handleDelete} type="button">Delete</button>
            </form>
        </div>
    </>
}
