import { QuestionModule } from './module/question.module';
// import { UserModule } from './module/question.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { GatewaysModule } from './gateways/gateways.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { UserController } from './controller/v1/user/user.controller';
import { AuthController } from './controller/auth/auth.controller';
import { AuthService } from './service/auth/auth.service';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://thienmlt8601:thien2609@kaduck.t22cfnm.mongodb.net/kaduck'),
    // GatewaysModule,
    QuestionModule
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
