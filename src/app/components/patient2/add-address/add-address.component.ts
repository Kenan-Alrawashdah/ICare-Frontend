import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css'],
})
export class AddAddressComponent implements OnInit {
  labels = 'A';
  labelIndex: number = 0;
  markers: google.maps.Marker[] = [];
  AddressForm: FormGroup;
  mapValidation: boolean = false;
  constructor(
    private patientService: PatientService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.AddressForm = new FormGroup({
      addressName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      details: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      lat: new FormControl(''),
      lng: new FormControl(''),
    });

    const Jordan = { lat: 31.963158, lng: 35.930359 };
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 12,
        center: Jordan,
      }
    );
    // This event listener calls addMarker() when the map is clicked.
    google.maps.event.addListener(map, 'click', (event) => {
      this.addMarker(event.latLng, map);
      var x = JSON.stringify(event.latLng.toJSON(), null, 2);
      var z = JSON.parse(x);
      console.log(typeof z);
      console.log(z['lat']);
      this.AddressForm.get('lat').setValue(z['lat']);
      this.AddressForm.get('lng').setValue(z['lng']);
      document.getElementById("dd").classList.add("remove")
    });
  }

  addMarker(location: google.maps.LatLngLiteral, map: google.maps.Map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    if (this.labelIndex == 0) {
      const marker = new google.maps.Marker({
        position: location,
        label: this.labels,
        map: map,
      });

      this.labelIndex++;
      this.markers.push(marker);
    } else {
      this.deleteMarkers();
      this.labelIndex = 0;

      const marker = new google.maps.Marker({
        position: location,
        label: this.labels,
        map: map,
      });
      this.labelIndex++;
      this.markers.push(marker);
    }
  }
  setMapOnAll(map: google.maps.Map | null) {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
  hideMarkers(): void {
    this.setMapOnAll(null);
  }
  deleteMarkers(): void {
    this.hideMarkers();
    this.markers = [];
  }
  onSubmit() {
    if (this.AddressForm.value.lat == '') {
      this.mapValidation = true;
    } else {
      console.log(this.AddressForm.value);
      this.patientService.addAddress(this.AddressForm.value).subscribe(() => {
        this.toastr.success('Location added successfully');
        this.router.navigate(['/Patient/Address']);
      });
    }
  }

  goToAddAddress() {
    this.router.navigate(['/Patient/AddAddress']).then(() => {
      window.location.reload();
    });
  }
}
