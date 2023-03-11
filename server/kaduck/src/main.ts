
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from "firebase-admin";
import { initializeApp } from 'firebase-admin/app';
import { credential } from 'firebase-admin';
var serviceAccount = require("../admin-key.json")
async function bootstrap() {
  const admin=initializeApp({
    credential:credential.cert(serviceAccount)

  })
  const app = await NestFactory.create(AppModule, {cors:true});
  await app.listen(4545);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
