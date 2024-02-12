'use client'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/navigation'
import Image from 'next/image'
import useCartService from '@/lib/hooks/useCartStore'
import Link from 'next/link'

export default function CartDetails() {
    const router=useRouter()
    const [mounted,setMounted]=useState(false)
    const {items,itemsPrice,decrease,increase}=useCartService()
    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted){
        return (
            <div>

            </div>
        )
    }

    return <>
    <h1 className='py-4 text-2xl'>Shopping Cart</h1>

    {items.length===0 ? (
        <div>
            Cart is Empty.<Link href='/'> Go to Shopping</Link>
        </div>
    ):
    (
        <div className='grid md:grid-col-4 md:gap-5'>
            <div className='overflow-x-auto md:cols-span-3'>
            <table className='table'>
                <thead>
                <tr>
                    <th>
                        Item
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
                </thead>
                <tbody>
                    {items.map((x)=>(
                        <tr key={(x.slug)}>
                            <td><Link href={`/product/${x.slug}`} className='flex items-center'>

                                <Image src={x.image} alt={x.name} width={50} height={50}></Image>
                                <span className='px-2'>{x.name}</span>
                            </Link></td>
                            <td>
                                <button className="btn" type="button" onClick={()=>decrease(x)}>
                                      -
                                </button>
                                <span className="px-2">
                                 {x.qty}
                                </span>
                                <button className="btn" type="button" onClick={()=>increase(x)}>
                                    +
                                </button>
                            </td>
                            <td>{x.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            </div>
            <div>
                <div className='card bg-base-300'>
                    <div className='card-body'>
                        <ul>
                            <li>
                                <div className='pb-3 text-xl'>
                                 Subtotal  ({items.reduce((a,c)=>a+c.qty,0)}):${itemsPrice}
                                </div>
                            </li>
                            <li>
                                <button className='btn btn-primary w-full' onClick={()=>(router.push('/shipping'))} type='button'>
                                    Proceed to Checkout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )}
    </>
}
