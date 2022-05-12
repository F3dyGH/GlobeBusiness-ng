import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {RatingsService} from "../services/Ratings/ratings.service";

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  ratingForm!: FormGroup;
  constructor(private formBuiler:FormBuilder, private rs:RatingsService) { }

  ngOnInit(): void {
  this.ratingForm = this.formBuiler.group({
    nbOfStars:['',Validators.required],
    comment:['',Validators.required]
  });
  }
  addRating(){
    this.rs.addFeedback(
      this.ratingForm.value,
    ).subscribe({
      next:(res) =>{

      }
    });
  }
}
