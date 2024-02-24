import { Injectable, OnModuleInit } from '@nestjs/common';
import {PrismaClient} from "@prisma/client";
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit(){
        await this.$connect().then((res) => console.log("Mongodb Connected!")).catch((err) => console.error(err))
    }
}
