"use client"

import { InputUser } from "@/lib/types"
import axios from "axios"
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function Page() {


    const [user, setUser] = useState<InputUser>({
        name: "", surname: "", salary: 65000
    })

    const router = useRouter()

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        axios
            .post("/users", user)
            .then(res => {
                router.push("/")
            })
    }
    return <>
        <div className="form-container">
            <h1 className="form-heading">Add User</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Name"
                        value={user.name}
                        onChange={e => setUser({ ...user, name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Surname"
                        value={user.surname}
                        onChange={e => setUser({ ...user, surname: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        className="input-field"
                        step={15000}
                        placeholder="Salary"
                        value={user.salary}
                        onChange={e => setUser({ ...user, salary: +e.target.value })}
                    />
                </div>
                <button className="button-save" type="submit">Save</button>
            </form>
        </div>
    </>
}