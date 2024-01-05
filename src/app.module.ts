import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from 'mikro-orm.config';
import { entities } from './entities';
import { controllers } from './controllers';
import { services } from './services';

@Module({
  imports: [MikroOrmModule.forRoot(config), MikroOrmModule.forFeature(entities)],
  controllers: [AppController, ...controllers],
  providers: [AppService, ...services],
})
export class AppModule {}
