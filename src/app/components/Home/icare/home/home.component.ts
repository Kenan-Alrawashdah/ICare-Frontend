import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token.service';
import { Usersearch } from 'src/app/shared/User/Models/usersearch.model';
import { HomePageService } from 'src/app/shared/User/Services/home-page.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private isLogin :boolean;
  constructor(
    private service: HomePageService,
    private tokenService:TokenStorageService,
    ) {
      if(tokenService.getToken() == null){
        this.isLogin = false;
      }else{
        this.isLogin = true;
      }
    }
  SearchForm!: FormGroup;
  list: Usersearch[];
  
  ngOnInit(): void {
    let Search = '';
    this.SearchForm = new FormGroup({
      Search: new FormControl(Search, [Validators.required]),
    });
  }

  GetDrugByNameSearch(search: string) {
    this.service.GetDrugByNameSearch(search).subscribe(
      (data) => {
        if (data.success == true) {
          this.list = data.data as unknown as Usersearch[];
        }
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  onSubmit() {
    const Search = this.SearchForm.value.Search;
    this.GetDrugByNameSearch(Search);
  }
}
