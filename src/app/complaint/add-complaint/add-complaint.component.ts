import { Component, OnInit } from '@angular/core';
import {Complaint} from "../../models/Complaint";
import {ComplaintService} from "../../services/Complaint/complaint.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit {
  complaint: Complaint = new Complaint();
  submitted = false;
  constructor(private cs : ComplaintService){}
  ngOnInit(): void {
  }
  addComplaint(){
    this.submitted = true;
    this.cs.addComplaint(this.complaint).subscribe();
    this.complaint = new Complaint();
    alert("Complaint has been sent successfully")
  }
}
