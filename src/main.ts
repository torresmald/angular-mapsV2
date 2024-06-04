import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import mapboxgl from 'mapbox-gl';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

mapboxgl.accessToken =
  'pk.eyJ1IjoidG9ycmVzbWFsZCIsImEiOiJjbHZkZzJndmYwbWd2MmlvNjk4cXN3cGZhIn0.bkyGeUch-OYN50jgzdG8ag';
