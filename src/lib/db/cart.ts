import { prisma } from "./prisma";
import { cookies } from "next/dist/client/components/headers";

export async function createCart() {
    const newCart = await prisma.cart.create({
        data: {}
    })

    cookies().set("localCartId", newCart.id)
}