import { Component, OnInit } from '@angular/core';
import {map, Observable, switchMap} from "rxjs";
import {ComplaintService} from "../services/Complaint/complaint.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Complaint} from "../models/Complaint";

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
    complaint : Complaint = new Complaint();
    submitted= false;
    compId$: Observable<number> = this.activatedRoute.params.pipe(
      map((params:Params)=>params['id'])
    )
    comp$: Observable<Complaint> = this.compId$.pipe(
    switchMap((id:number)=> this.cs.getComplaint(id)
    )
  )

  constructor(private cs : ComplaintService, private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  delete(){
      this.cs.deleteComplaint(this.compId$).subscribe();
      alert("deleted complaint");
  }

}
