import { Component, OnInit } from '@angular/core';
import { GetMyDrugsModel } from '../models/GetMyDrug.model';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-my-drugs',
  templateUrl: './my-drugs.component.html',
  styleUrls: ['./my-drugs.component.css']
})

export class MyDrugsComponent implements OnInit {

  myDrugs?:GetMyDrugsModel[]
  constructor(
    private patientServices:PatientService
  ) { }

  async ngOnInit() {
   await this.getMyDrugs();
  }

  async getMyDrugs(){
      var myDrugs = await this.patientServices.getMyDrugs().toPromise();
      this.myDrugs= myDrugs.data['myDrugs'];
  }

}
