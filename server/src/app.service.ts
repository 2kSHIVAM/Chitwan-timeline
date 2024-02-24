import {HttpStatus, Injectable} from '@nestjs/common';
import {TResponse} from "./types";
import {RuntimeException} from "@nestjs/core/errors/exceptions";
import {PrismaService} from "./prisma/prisma.service";

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello() {
    return 'Hello World!';
  }

  async getMe(){
    try{
      const me = await this.prisma.me.findUnique({
        where: {
          email: 'chitwan001@gmail.com'
        }
      })
      delete me.id
      const res: TResponse<typeof me> = {
        statusCode: HttpStatus.OK,
        error: null,
        data: me
      }
      return res
    }catch (e){
      throw new RuntimeException(e)
    }
  }

  // async updateMe(data:any){
  //   try {
  //     this.prisma.me.update({
  //       where:{
  //         email:'chitwan001@gmail.com'
  //       },
  //       data:{
  //         greeting: data.greeting
  //       }
  //     })
  //     const res: TResponse<{ message:string }> = {
  //       statusCode: HttpStatus.OK,
  //       error: null,
  //       data: {
  //         message: "Successfully updated!"
  //       }
  //     }
  //     return res
  //   }catch (e){
  //     throw new RuntimeException(e)
  //   }
  // }

  // async createMe() {
  //   try{
  //     await this.prisma.me.create({
  //       data: {
  //         email: 'chitwan001@gmail.com',
  //         name: 'Chitwan Bindal',
  //         description: 'I am a Web Developer!',
  //         currentRole: 'Web Developer'
  //       }
  //     })
  //     const res : TResponse<{ message: string }> = {
  //       statusCode: HttpStatus.CREATED,
  //       error: null,
  //       data:{
  //         message:'Me successfully created!'
  //       }
  //     }
  //     return res
  //   }catch (e){
  //     throw new RuntimeException(e)
  //   }
  // }
}
