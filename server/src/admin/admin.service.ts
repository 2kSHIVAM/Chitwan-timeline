import {HttpCode, HttpStatus, Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {hashPassword} from "../utils";
import {RuntimeException} from "@nestjs/core/errors/exceptions";
import {TResponse} from "../types";

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) {}

    // async createAdmin(){
    //     const hashedPass = await hashPassword('a1@ashvani.')
    //     try{
    //         await this.prisma.user.create({
    //             data:{
    //                 name: 'Chitwan Bindal',
    //                 email: 'chitwan001@gmail.com',
    //                 password: hashedPass,
    //                 role: 'ADMIN'
    //             }
    //         })
    //         const res : TResponse<{ message:string }> = {
    //             statusCode: HttpStatus.CREATED,
    //             data:{
    //                 message:'Admin created successfully!'
    //             },
    //             error: null
    //         }
    //         return res
    //     }catch (err) {
    //         throw new RuntimeException(`Error: ${err}`)
    //     }
    // }
}
