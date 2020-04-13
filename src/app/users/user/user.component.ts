import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //public releaseArray=[];

  constructor(public service : UserService, 
    public notificationService : NotificationService,
    public dialogRef : MatDialogRef<UserComponent>
    ) { }

  ngOnInit() {
    /*console.log(this.service.getReleaseNamesFromApi());
    this.service.getReleaseNamesFromApi()
      .subscribe(data => this.releaseArray = data);*/
  }
  
  public onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  public onSubmit() {
    if(this.service.form.valid) {
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success("Submitted Successfully");
      this.onClose();
    }
  }

  public onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
  
  public releaseArray = [
    {id : 1, value : "R6.05 Lot 31"},
    {id : 2, value : "R6.05 Lot 32"},
    {id : 3, value : "R6.05 Lot 33"},
    {id : 4, value : "R6.05 Lot 34"}
  ];

  public userArray = [
    {id : 1, value : "Satheesh Babu"},
    {id : 2, value : "Bala Sudhakar"},
    {id : 2, value : "Naresh Yarammareddy"},
    {id : 2, value : "Guna seelan"},
    {id : 2, value : "Aashiq Ahmed"}
  ];

  public modelArray = [
    {id : 1, value : "scrum"},
    {id : 2, value : "kanban"}
  ];

  public roleArray = [
    {id : 1, value : "Product Owner"},
    {id : 2, value : "Scrum Master"},
    {id : 3, value : "Team Member"},
    {id : 4, value : "Tester"}
  ];

  public avlInPercentageArray = [
    {id : 1, value : "10"},
    {id : 2, value : "20"},
    {id : 3, value : "30"},
    {id : 4, value : "40"},
    {id : 5, value : "50"},
    {id : 6, value : "60"},
    {id : 7, value : "70"},
    {id : 8, value : "80"},
    {id : 9, value : "90"},
    {id : 10, value : "100"}
  ];
}
