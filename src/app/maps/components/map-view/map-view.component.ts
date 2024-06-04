import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { PlacesService } from '../../services';
import {Map, Popup, Marker} from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css',
})
export class MapViewComponent implements AfterViewInit {
  public placesService = inject(PlacesService);
  
  @ViewChild('map') 
  public mapDiv!: ElementRef;
  
  ngAfterViewInit(): void {

    if( !this.placesService.userLocation ) return
  const map = new Map({
    container: this.mapDiv.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 14,
    center: this.placesService.userLocation,
  });

  const popup = new Popup().setHTML(`<h6>Esto es un Popup</h6>`)
  const marker = new Marker({color: 'red'}).setLngLat(this.placesService.userLocation).setPopup(popup).addTo(map)
  }
  ngOnInit(): void {
    console.log(this.placesService.userLocation);
  }


}
