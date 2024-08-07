import { Product } from "@prisma/client"
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image"

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({product}: ProductCardProps) {
    const isNew = Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 24 * 7

    return (
        <Link 
        href={"/pages/shop/products/" + product.id}
        className="card w-full hover:shadow-xl transition-shadow"
        >
            <figure>
                <Image 
                    src={product.imageUrl}
                    alt="{product.name}"
                    width={800}
                    height={400}
                    className="h-48 object-cover"
                />
            </figure>
            <div className="card-body card-background">
                <h2 className="card-title">
                    {product.name}
                    {isNew && <div className="badge badge-secondary">New</div>}
                </h2>
                <p>{product.description}</p>
                <PriceTag price={product.price} />
            </div>
        </Link>
    )
}