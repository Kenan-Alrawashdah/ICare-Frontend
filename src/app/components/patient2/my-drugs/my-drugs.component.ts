import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetMyDrugsModel } from '../models/GetMyDrug.model';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-my-drugs',
  templateUrl: './my-drugs.component.html',
  styleUrls: ['./my-drugs.component.css']
})
@Injectable({
  providedIn:'root'
})
export class MyDrugsComponent implements OnInit {

  myDrugs:GetMyDrugsModel[]
  today:Date = new Date() ;
  constructor(
    private patientServices:PatientService,
    private router:Router
  ) { }

  async ngOnInit() {
   await this.getMyDrugs();
  }

  compare(dDate:Date) : boolean
  {
    return(new Date(dDate) < this.today)
  }

  async getMyDrugs(){
    await this.patientServices.getMyDrugs().toPromise()
    .then(
      (response)=>{
        this.myDrugs = response.data['myDrugs'];
        
        console.log(this.myDrugs)
        console.log(this.today)
      }
    )
  }

  goToEditDrug(id:number)
  {
    this.patientServices.editDrugIdNumber = id; 
    this.router.navigate(['/Patient/EditDrug'])
  }

  deleteDrug(id:number)
  {
    if(confirm("Are you sure to delete ")) {
      this.patientServices.deleteDrug(id).subscribe(
        (response)=>{
          this.ngOnInit();
        }
      );
    }
    
  }

}
