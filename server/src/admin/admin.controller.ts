import {Controller, Get, HttpCode} from '@nestjs/common';
import {AdminService} from "./admin.service";
import {Public} from "../utils";

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    // @Public()
    // @Get()
    // @HttpCode(201)
    // async createAdmin(){
    //     return await this.adminService.createAdmin()
    // }
}
