import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { GetAllTestimonial } from '../Models/get-all-testimonial.model';


@Component({
  selector: 'app-get-all-testimonial',
  templateUrl: './get-all-testimonial.component.html',
  styleUrls: ['./get-all-testimonial.component.css'],
})
export class GetAllTestimonialComponent implements OnInit {
  constructor(private adminService: AdminService) {}
  AllTestimonial:GetAllTestimonial[];
  ngOnInit(): void {
    this.adminService.GetAllTestimonial().subscribe(data=>{
      if(data.success)
      {
        this.AllTestimonial=data.data;
      }
    })
  }
}
