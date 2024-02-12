import { Metadata } from "next";
import  Form from './Form';


export const metadata:Metadata={
    title:'Order Summary'
}

export default async function PageOrderSummary(){
    return <Form/>
}