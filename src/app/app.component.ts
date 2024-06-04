import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapsScreenComponent } from './maps/pages/maps-screen/maps-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapsScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'maps-app';
}
