import { Metadata } from "next";
import Form from "./Form";

export const metadata:Metadata={
    title:'User Profile'
}

export default async function ProfilePage(){
    return (
        <>
         <Form/>
        </>
    )
}