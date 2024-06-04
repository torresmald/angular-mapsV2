import { Component, inject } from '@angular/core';
import { MapsService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-location',
  standalone: true,
  imports: [],
  templateUrl: './btn-location.component.html',
  styleUrl: './btn-location.component.css'
})
export class BtnLocationComponent {

  public mapsService = inject(MapsService)
  public placesService = inject(PlacesService)

  public onGoToLocation(){
    if(!navigator.geolocation) return
    if(!this.placesService.userLocation) return


    this.mapsService.flyTo(this.placesService.userLocation)
  }

}
