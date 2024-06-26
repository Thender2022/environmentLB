"use server"

import Link from "next/link"
import Image from "next/image"
import gif from "@/assets/gif.gif"
import { redirect } from "next/navigation"
import { getCart } from "@/lib/db/cart"
import ShoppingCartButton from "./ShoppingCartBtn"
import { getServerSession } from "next-auth"
// import { authOptions } from "../api/auth/[...nextauth]/route"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import UserMenuButton from "./UserMenuButton"
import NavLinks from "./Nav"


async function searchProducts(formData: FormData) {
    "use server"

    const searchQuery = formData.get("searchQuery")?.toString();

    if (searchQuery) {
        redirect("/search?query=" + searchQuery);
    }
}

export default async function Navbar() {
    const session = await getServerSession(authOptions)
    const cart = await getCart();

    return (
        <div style={{ backgroundColor: 'black' }} className="bg-base-100">
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
               <div className="flex-1">
                <Link href="/pages/home" className="btn btn-ghost text-xl normal-case" >
                    <Image src={gif} height={40} width={40} alt="EnviornmentLB Logo" />
                    <span className="environment-link">EnvironmentLB</span>
                </Link>
               </div>
               {/* <NavLinks /> */}
               <div className="flex-none gap-2">
                <form action={searchProducts}>
                    <div className="form-control">
                        <input 
                            name="searchQuery"
                            placeholder="Search"
                            className="input input-bordered w-full min-w[100px]"
                        />
                    </div>
                </form>
                
                <ShoppingCartButton cart={cart} />
                <UserMenuButton session={session} />
               </div>
            </div>
        </div>
    )
}

