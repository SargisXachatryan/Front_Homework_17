import { deleteUser, getUserById, updateUser } from "@/lib/api"
import { Props } from "@/lib/types"

export const GET = async (req: Request, { params: { id } }: Props) => {
    const user = getUserById(id)

    if (user) {
        return Response.json(user)
    } else {
        return Response.json({ status: 'error' })
    }
}

export const PUT = async (req: Request, { params: { id } }: Props) => {
    const updatedUser = await req.json()
    const result = updateUser(id, updatedUser)

    if (result.changes) {
        return Response.json({ status: 'ok' })
    } else {
        return Response.json({ status: 'error' })
    }
}

export const DELETE = async (req: Request, { params: { id } }: Props) => {
    const result = deleteUser(id)

    if (result.changes) {
        return Response.json({ status: 'ok' })
    } else {
        return Response.json({ status: 'error' })
    }
}
