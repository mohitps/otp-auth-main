'use client'

import { signIn } from "next-auth/react"


export default function Navbar() {
    return (
        <button 
            onClick={() => signIn(
                "descope", 
                { callbackUrl: "/dashboard" }
            )}
        >Sign In
        </button>
    )
}