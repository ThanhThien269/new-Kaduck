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
import { PlayerController } from './controller/player/player.controller';
import { PlayerService } from './service/player/player.service';
import { Player, PlayerSchema } from './schemas/player.schema';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://thienmlt8601:thien2609@kaduck.t22cfnm.mongodb.net/kaduck'),
    // GatewaysModule,
    QuestionModule,
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
  ],
  controllers: [AppController, AuthController, PlayerController],
  providers: [AppService, AuthService, PlayerService],
})
export class AppModule {}
