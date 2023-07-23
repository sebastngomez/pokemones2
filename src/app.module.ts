import { join } from 'path'; // en Node
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load:[ EnvConfiguration ],
         
    }), //Se debe colocar al inicio para poder configurar las variables de entorno   
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }),

    MongooseModule.forRoot( 'mongodb+srv://rgbonilla:sAibEM5fXHJEg4MD@cluster0.jcqnro6.mongodb.net' ),

    PokemonModule,

    CommonModule,

    SeedModule,

  ],
})
export class AppModule {
  constructor(){}
}
