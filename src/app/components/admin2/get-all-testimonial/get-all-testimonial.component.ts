import { Component, OnInit } from '@angular/core';
import { GetAllTestimonial } from '../../admin-dashboard/Models/get-all-testimonial.model';
import { AdminService } from '../../admin-dashboard/Service/admin.service';

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
