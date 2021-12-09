import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrugComponent } from '../drug/drug.component';
import { HomeService } from '../home.service';
import { DrugModel } from '../models/Drug.model';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {
  
  DrugList:DrugModel[];

  constructor(
    private homeServices:HomeService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getDrugs();
  }

  public async getDrugs(){
    if(this.homeServices.CategoryId == -1)
    {
        this.router.navigate(['Home/main']);
    }
    return await this.homeServices.GetAllCategoryDrugs().toPromise()
    .then(
      (response=>{
        this.DrugList = response.data
      })
    );

  }

  public GoToDrug(id:number){
    this.homeServices.DrugId = id;
    this.router.navigate(['Home/Drug']);
  }



}
