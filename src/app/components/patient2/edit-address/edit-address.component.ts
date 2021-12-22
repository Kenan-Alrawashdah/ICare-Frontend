import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  id:string;
  labels = 'A';
  labelIndex: number = 0;
  markers: google.maps.Marker[] = [];
  AddressForm: FormGroup;
  location:google.maps.LatLngLiteral;
  constructor(
    private patientService:PatientService,
    private router:Router,
    private _Activatedroute:ActivatedRoute,
    private toastr:ToastrService
    ) {
      this.id=this._Activatedroute.snapshot.paramMap.get("id");
      
    }

    async getLocationInfo()
    {
     await  this.patientService.GetLocationById(this.id).toPromise()
      .then(
        (response)=>{
          console.log(response)
          this.AddressForm = new FormGroup({
            id: new FormControl(response.data.id, [Validators.required]),
            addressName: new FormControl(response.data.addressName, [Validators.required]),
            phoneNumber: new FormControl(response.data.phoneNumber, [Validators.required]),
            city: new FormControl(response.data.city, [Validators.required]),
            street: new FormControl(response.data.street, [Validators.required]),
            details: new FormControl(response.data.details, [Validators.required]),
            zipCode: new FormControl(response.data.zipCode, [Validators.required]),
            lat: new FormControl(response.data.lat, [Validators.required]),
            lng: new FormControl(response.data.lng, [Validators.required]),
          });
          console.log(this.AddressForm)
          
        }
      )
    }

    
  async ngOnInit(){
    await  this.getLocationInfo()

    const Jordan = { lat: this.AddressForm.get('lat').value, lng: this.AddressForm.get('lng').value };
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 12,
        center: Jordan
      }
      );
      // this.location.lat = this.AddressForm.get('lat').value;
      // this.location.lng = this.AddressForm.get('lng').value;
      this.addMarker(Jordan,map)
    // This event listener calls addMarker() when the map is clicked.
    google.maps.event.addListener(map, 'click', (event) => {
      this.addMarker(event.latLng, map);
      var x = JSON.stringify(event.latLng.toJSON(), null, 2);
      var z = JSON.parse(x);
      console.log(typeof z);
      console.log(z['lat']);
      this.AddressForm.get('lat').setValue(z['lat']);
      this.AddressForm.get('lng').setValue(z['lng']);
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
  getMyLocation() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(function (postion) {
        console.log(postion);
      });
    else console.log('not supported');
  }

  onSubmit()
  {
    console.log('onSubmit')
    console.log(this.AddressForm.value)
    this.patientService.EditLocation(this.AddressForm.value).subscribe(
      ()=>{
        this.toastr.success('Location edited successfully');
        this.router.navigate(['/Patient/Address']);
      }
    );
  }

  goToAddAddress()
  {
    this.router.navigate(['/Patient/AddAddress']).then(
      ()=>
      {
        window.location.reload();
      }
    )
  }

  

}
