import Link from "next/link";
import { Suspense } from "react";
import { UserList } from "@/lib/user-list";

export default function Home() {

  return <>
    <div className="container">
      <Link href="/users/add" className="add-user-link">
        Add User
      </Link>
      <Suspense fallback={<p className="loading-message">Loading...</p>}>
        <UserList />
      </Suspense>
    </div >
  </>
}
