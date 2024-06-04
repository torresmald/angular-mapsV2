import { Component, inject } from '@angular/core';
import { PlacesService } from '../../services';
import { LoadingComponent } from '../../components/loading/loading.component';
import { MapViewComponent } from '../../components/map-view/map-view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maps-screen',
  standalone: true,
  imports: [LoadingComponent, MapViewComponent, CommonModule],
  templateUrl: './maps-screen.component.html',
  styleUrl: './maps-screen.component.css'
})
export class MapsScreenComponent {

  public placesService = inject(PlacesService)

  public get isUserLocationReady (){
    return this.placesService.isReadyUserLocation()
  }

}
