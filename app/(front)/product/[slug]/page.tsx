import AddToCart from "@/components/product/AddToCart"
import data from "@/lib/data"
import { convertDoctoObj } from "@/lib/utils"
import productService from "@/lib/services/productService"
import Image from "next/image"
import Link from "next/link"


export async function generateMetadata({
    params,
}:
{
params:{slug:string}
}){
    const product=await productService.getBySlug(params.slug)
    if(!product){
        return {title:'product Not found'}
    }
    return{
        title:product.name,
        description:product.description,
    }
}


export default async function ProductDetails({params,}:{
    params:{ slug:string }
}) {

    const product=await productService.getBySlug(params.slug)
    if(!product){
        return(<div>Product not found</div>)
    }
  return (
    <>
    <div className="my-2">
        <Link href="/" className="btn btn-primary">Back to products</Link>
    </div>
    <div className="grid md:grid-cols-3 md:gap-3">
    <div className="md:cols-span-2">
        <Image
        src={product.image}
        alt={product.name}
        width={640}
        height={640}
        sizes="100vw"
        style={{width:'100%',
        height:'auto'}}
        >

        </Image>
        </div>
    <div>
        <ul className="space-y-4"> 
            <li className="text-xl">
                {product.name}
            </li>
            <li>
                {product.rating} of {product.numReview} reviews
            </li>
            <li>
                <div className="divider"></div>
            </li>
            <li>
                Description: <p>{product.description}</p>
            </li>
        </ul>
    </div>

    <div>
    <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
    <div className="card-body">
        <div className="mb-2 flex justify-between">
            <div>
                Price
            </div>
            <div>
                ${product.price}
            </div>
        </div>
        <div className="mb-2 flex justify-between">
            <div>
                Status
            </div>
            <div>
                {
                    product.countInStock > 0 ? "In Stock" : "Out of Stock" 
                }
            </div>
        </div>
        {
            product.countInStock !==0 &&(
                <div className="card-actions justify-center">
                    <AddToCart item={{
                        ...convertDoctoObj(product),
                        qty:0,color:'',size:''}}/>
                </div>
            )
        }
    </div>
    </div>
    </div>
    
    </div>
    </>
  )
}
