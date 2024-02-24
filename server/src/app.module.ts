import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { PrismaModule } from './prisma/prisma.module';
import {APP_FILTER, APP_GUARD} from "@nestjs/core";
import {CustomExceptionFilter} from "./custom-exception.filter";
import {JwtModule} from "@nestjs/jwt";
import {AuthGuard} from "./auth.guard";

@Module({
  imports: [
    AdminModule,
    PrismaModule,
    JwtModule.register({
      global:true,
      secret: 'thisisasecretkey',
      signOptions: {expiresIn: '60s'}
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
})
export class AppModule {}
