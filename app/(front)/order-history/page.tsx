import { Metadata } from "next";
import MyOrders from "./Myorders";


export const metadata:Metadata={
    title:'Order History'
}

export default async function PageOrderSummary(){
    return (
        <>
        <h1 className="text-2xl py-2">
            Order History
        </h1>
        <MyOrders/>
        </>
    )
}