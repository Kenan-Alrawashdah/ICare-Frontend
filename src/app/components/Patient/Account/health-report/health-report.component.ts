import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-health-report',
  templateUrl: './health-report.component.html',
  styleUrls: ['./health-report.component.css'],
})
export class HealthReportComponent implements OnInit {
  healthReportForm: FormGroup;
  constructor(private userService: UserService) {}
  selectedFile: File;
  ngOnInit(): void {
    this.healthReportForm = new FormGroup({
      testName: new FormControl(''),
      testValue: new FormControl(''),
      testFile: new FormControl(''),
    });
  }

  upload(event) {
    this.selectedFile = event.target.files.item(0);

    this.userService.upload(this.selectedFile).subscribe(
      (res) => {
        console.log('res');
      },
      (error) => {
        console.log('error');
      }
    );
  }
}
