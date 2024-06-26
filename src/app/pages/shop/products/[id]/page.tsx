import PriceTag from "@/components/PriceTag"
import { prisma } from "@/lib/db/prisma"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { cache } from "react"
import AddToCartButton from "./AddToCartBtn"
import { incrementProductQuantity } from "./actions"


interface ProductPageProps {
    params: {
        id: string,
    }
}

const getProduct = cache(async (id: string) => {
    const product = await prisma.product.findUnique({where: {id}})
    if (!product) notFound();
    return product;
})

export async function generateMetadata(
    {params: {id}} : ProductPageProps
): Promise<Metadata> {
    const product = await getProduct(id);

    return {
        title: product.name + " - EnvironmentLB",
        description: product.description,
        openGraph: {
            title: `{product.name} - EnvironmentLB`,
            description: product.description,
            url: `https://environment-lb.vercel.app/`,
            images: [{ url: product.imageUrl}]
        }
    }
}

export default async function ProductPage(
    {params: {id}} : ProductPageProps
) {
    const product = await getProduct(id);

    return(
        <div className="min-h-screen">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center max-w-7xl mx-auto px-4 ">
                <Image 
                    src={product.imageUrl}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="rounded-lg"
                    priority
                />

                <div>
                    <h1 className="text-5xl font-bold">{product.name}</h1>
                    <PriceTag price={product.price} className="mt-4" />
                    <p className="py-6">{product.description}</p>
                    <AddToCartButton
                        productId={product.id} 
                        incrementProductQuantity={incrementProductQuantity}
                    />
                </div>
            </div>
        </div>
    )
}