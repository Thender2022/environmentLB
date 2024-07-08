import FormSubmitButton from "@/components/FormSubmitBtn";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";


export const metadata = {
    title: "Add Product - Environment Gallery"
}

async function addProduct(formData: FormData) {
    "use server";

    const session = await getServerSession(authOptions)
    if (!session) {
        redirect("api/auth/signin?callbackUrl=/add-product")
    }

    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString()
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);


    if (!name || !description || !imageUrl || !price) {
        throw Error("Missing required fields");
    }
    
    await prisma.product.create({
        data: {name, description, imageUrl, price},
    });

    redirect("/pages/home")
}

export default async function AddProductPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("api/auth/signin?callbackUrl=/add-product")
    }

    return (
        <div>
            <h1 className="mb-3 text-lg font-bold">Add Product</h1>
            <form action={addProduct}>
                <input
                    required
                    name="name"
                    placeholder="Name" 
                    className="input-bordered input mb-2 w-full"
                />
                <textarea
                    required
                    name="description"
                    placeholder="Description"
                    className="textarea-bordered textarea mb-2 w-full"
                />
                <input
                    required
                    name="imageUrl"
                    placeholder="Image Url"
                    type="url"
                    className="textarea-bordered textarea mb-2 w-full"
                />
                <input
                    required
                    name="price"
                    placeholder="Price"
                    type="number"
                    className="textarea-bordered textarea mb-2 w-full"
                />
                <FormSubmitButton className="btn-block">
                    Add Product
                </FormSubmitButton>
            </form>
        </div>
    )
}