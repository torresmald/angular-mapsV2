import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  private _map?: Map;

  public get map(): Map | undefined {
    return this._map;
  }
  public set map(value: Map | undefined) {
    this._map = value;
  }

  public isMapReady(): boolean {
    return !!this._map;
  }

  public flyTo(coords: LngLatLike) {
    if (!this.isMapReady) return;

    this._map?.flyTo({
      zoom: 14,
      center: coords,
    });
  }
}
