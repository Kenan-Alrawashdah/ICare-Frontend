import { Component, OnInit } from '@angular/core';
import { GetAllDrugs } from 'src/app/shared/User/Models/get-all-drugs.model';
import { HomePageService } from 'src/app/shared/User/Services/home-page.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private service: HomePageService) {}

  list: GetAllDrugs[];

  ngOnInit(): void {
    this.GetAllDrugs();
  }
  GetAllDrugs() {
    this.service.GetAllDrug().subscribe(
      (data) => {
        if (data.success == true) {
          this.list = data.data as unknown as GetAllDrugs[];
        }
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
