import {Body, Controller, Get, Post} from '@nestjs/common';
import {AppService} from './app.service';
import {Public} from "./utils";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Public()
  @Get('me')
  async getMe(){
    return await this.appService.getMe()
  }

  @Public()
  @Post('me/update')
  async updateMe(@Body() data:any){
    console.log(data)
  }
}
