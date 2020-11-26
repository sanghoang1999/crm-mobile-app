import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger'
import createSubscriber from "pg-listen";
console.log(process.env.DATABASE_URL)
const subscriber = createSubscriber({ connectionString: process.env.DATABASE_URL ,        ssl:{
          rejectUnauthorized:false
        },})

async function connect () {
  try {
    
    await subscriber.connect()
    await subscriber.listenTo("new_order")
  } catch (error) {
    console.log(error)
  }
}
 
async function bootstrap() {
  const logger = new Logger('bootstrap')
  const app = await NestFactory.create(AppModule,{cors:true});
  await connect();
  subscriber.notifications.on("new_order", (payload) => {
    // Payload as passed to subscriber.notify() (see below)
    console.log("Received notification in 'my-channel':", payload)
  })
  const options = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT || 8888);

  logger.log(`Environment: ${process.env.NODE_ENV}`);
}


bootstrap();
