import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: google.maps.Map;
  ds: google.maps.DirectionsService;
  dr: google.maps.DirectionsRenderer;
  source: google.maps.LatLngLiteral;
  destination: google.maps.LatLngLiteral;
  lat;
  lng;
  constructor(private _Activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.lat = this._Activatedroute.snapshot.paramMap.get('lat');
    this.lng = this._Activatedroute.snapshot.paramMap.get('lng');

    console.log(this.lat);
    console.log(this.lng);

    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: 31.963158, lng: 35.930359 },
      }
    );

    this.ds = new google.maps.DirectionsService();
    this.dr = new google.maps.DirectionsRenderer({
      map: this.map,
      suppressMarkers: true,
    });

    navigator.geolocation.getCurrentPosition((position) => {
      this.source = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();
    this.geocodeLatLng(geocoder, this.map, infowindow);
  }

  geocodeLatLng(
    geocoder: google.maps.Geocoder,
    map: google.maps.Map,
    infowindow: google.maps.InfoWindow
  ) {
    const latlng = {
      lat: parseFloat(this.lat),
      lng: parseFloat(this.lng),
    };
    geocoder
      .geocode({ location: latlng })
      .then((response) => {
        if (response.results[0]) {
          map.setZoom(11);

          new google.maps.Marker({
            position: this.source,
            animation: google.maps.Animation.DROP,
            icon: {
              url: './assets/map/truck_pin.svg',
              anchor: new google.maps.Point(35, 10),
              scaledSize: new google.maps.Size(100, 100),
            },
            map: map,
          });
          const latlng = {
            lat: parseFloat(this.lat),
            lng: parseFloat(this.lng),
          };
          this.destination = latlng;

          new google.maps.Marker({
            position: this.destination,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: {
              url: './assets/map/destination_custom_pin.svg',
              anchor: new google.maps.Point(35, 10),
              scaledSize: new google.maps.Size(100, 100),
            },
          });
          map.panTo(this.destination);
          this.setRoutePolyline(map);
          infowindow.setContent(response.results[0].formatted_address);
        } else {
          window.alert('No results found');
        }
      })
      .catch((e) => window.alert('Geocoder failed due to: ' + e));
  }

  setRoutePolyline(map: google.maps.Map) {
    let request = {
      origin: this.source,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    this.ds.route(request, (response, status) => {
      this.dr.setOptions({
        suppressPolylines: false,
        map: map,
      });

      if (status == google.maps.DirectionsStatus.OK) {
        this.dr.setDirections(response);
      }
    });
  }
}
