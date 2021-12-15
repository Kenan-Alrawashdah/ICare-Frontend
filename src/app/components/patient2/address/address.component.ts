import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationModel } from '../models/location.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {

  LocationList:LocationModel[];
  constructor(
    private patientService:PatientService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.GetLocations();
  }

  async GetLocations()
  {
    this.patientService.GetUserLocations().toPromise()
    .then(
      (response)=>
      {
        this.LocationList = response.data
      }
    )
  }

  goToAddAddress()
  {
    this.router.navigate(['/Patient/AddAddress']).then(
      
    )
  }
}
