import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerModule } from './player/player.module';
import { QuestionModule } from './question/question.module';
import { QuestionKitModule } from './question_kit/question_kit.module';
import { AuthModule } from './auth/auth.module';
import { GameModule } from './game/game.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://thienmlt8601:thien2609@kaduck.t22cfnm.mongodb.net/kaduck'),
    PlayerModule,
    QuestionModule,
    QuestionKitModule,
    AuthModule,
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
