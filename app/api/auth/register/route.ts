import dbConnect from "@/lib/dbconnect";
import { NextRequest } from "next/server";
import bcrypt from 'bcryptjs';
import userModel from "@/lib/models/UserModel";

export const POST=async(request:NextRequest)=>{

    const {name,email,password}=await request.json()
    await dbConnect()
    const hashPassword= await bcrypt.hash(password,5)

    const newUser=new userModel({
        name,
        email,
        password:hashPassword,
    })

    try{
        await newUser.save()
        return Response.json(
            {message:"User has been created"},
            {
                status:201,
            }
        )
    }
    catch(err:any){
        return Response.json({
            message:err,
        },
        {
            status:500,
        })
    }
}