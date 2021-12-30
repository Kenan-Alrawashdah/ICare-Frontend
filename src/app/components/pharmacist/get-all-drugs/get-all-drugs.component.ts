import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from '../../home2/models/Category.model';
import { DrugModel } from '../Models/Drug.model';
import { PharmacistService } from '../Services/pharmacist.service';

@Component({
  selector: 'app-get-all-drugs',
  templateUrl: './get-all-drugs.component.html',
  styleUrls: ['./get-all-drugs.component.css'],
})
export class GetAllDrugsComponent implements OnInit {
  listOfDrugs: DrugModel[];
  SearchList: DrugModel[];
  Drug: DrugModel[];
  CategoryList: CategoryModel[];
  selectedCategory: string = 'Category';
  search: string = '';
  constructor(
    private pharmacistService: PharmacistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllDrugs();
    this.getAllCategories();
  }

  CategoryFilter(id: number, name: string) {
    if (id == 0) {
      this.SearchList = this.Drug;
      this.selectedCategory = 'Category';
    } else {
      this.listOfDrugs = this.Drug.filter((c) => c.drugCategoryId == id);
      this.SearchList = this.listOfDrugs;
      this.selectedCategory = name;
      this.search = '';
    }
  }

  searchDrug() {
    if (this.search != '') {
      this.SearchList = this.listOfDrugs.filter((c) =>
        c.name.toLowerCase().includes(this.search.toLowerCase())
      );
    } else {
      this.SearchList = this.listOfDrugs;
    }
  }

  async getAllDrugs() {
    await this.pharmacistService
      .getAll()
      .toPromise()
      .then((response) => {
        this.listOfDrugs = response.data;
        this.Drug = response.data;
        this.SearchList = this.listOfDrugs;
        console.log(this.listOfDrugs);
      });
  }

  async getAllCategories() {
    await this.pharmacistService
      .GetAllCategory()
      .toPromise()
      .then((response) => {
        this.CategoryList = response.data['categories'];
        console.log(this.CategoryList);
      });
  }

  goToDrug(id: number) {
    this.pharmacistService.drugId = id;
    this.router.navigate(['pharmacist/SingleDrug']);
  }
}
