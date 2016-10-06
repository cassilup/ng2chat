import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

var styles = require('./styles.css');

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
