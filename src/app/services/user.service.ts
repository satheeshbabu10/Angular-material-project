import { Injectable } from '@angular/core';
import { FormGroup , FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { IReleaseNames } from '../releaseNames';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlReleaseNames :string = "http://localhost:9000/getReleaseNamesFromJira";
  
  constructor(private http : HttpClient) { }

  getReleaseNamesFromApi(): Observable<IReleaseNames[]> {
    return this.http.get<IReleaseNames[]> (this.urlReleaseNames);
  }

  getUsersList() {
    return [
      {releaseName : "R6.05 Lot 31", userName : "Satheesh",model : "Scrum",role : "Scrum master",availability : "50"},
      {releaseName : "R6.05 Lot 31", userName : "Satheesh",model : "Scrum",role : "Team Member",availability : "100"},
      {releaseName : "R6.05 Lot 31", userName : "Bala",model : "Scrum",role : "Team Member",availability : "100"},
      {releaseName : "R6.05 Lot 31", userName : "Guna",model : "Scrum",role : "Team Member",availability : "100"},
      {releaseName : "R6.05 Lot 31", userName : "Aashiq",model : "Scrum",role : "Team Member",availability : "100"}
    ];
     
  }

  populateForm() {

  }

  form : FormGroup = new FormGroup({

    $key : new FormControl(null),
    releaseName : new FormControl('1', Validators.required),
    userName : new FormControl('', Validators.required),
    model : new FormControl('', Validators.required),
    role : new FormControl('', Validators.required),
    availability : new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      releaseName: '1',
      userName: '',
      model: '',
      role: '',
      availability: ''
    });
  }
}
