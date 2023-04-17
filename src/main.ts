
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Import dotenv and load environment variables from .env file
import * as dotenv from 'dotenv';
dotenv.config();



platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
