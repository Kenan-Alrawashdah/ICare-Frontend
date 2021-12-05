import 'jquery';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token.service';
import { Usersearch as UserSearch } from 'src/app/shared/User/Models/usersearch.model';
import { HomePageService } from 'src/app/shared/User/Services/home-page.service';
import { UserToken } from 'src/app/shared/User/Models/UserToken';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  list: UserSearch[];
  Name: string = this.tokenService.getUser();

  public isLogin: boolean;
  public InputSearch: string;
  constructor(
    private service: HomePageService,
    private tokenService: TokenStorageService
  ) {}
  ngOnInit(): void {
    console.log(typeof this.Name);
    let token = this.tokenService.getToken();
    if (token == null) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
    console.log(this.isLogin);
  }

  GetDrugByNameSearch() {
    this.service.GetDrugByNameSearch(this.InputSearch).subscribe(
      (data) => {
        if (data.success == true) {
          this.list = data.data as unknown as UserSearch[];
        }
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  logout() {
    this.tokenService.signOut();
    this.ngOnInit();
  }
}
