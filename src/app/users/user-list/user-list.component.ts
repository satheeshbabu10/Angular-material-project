import { Component, OnInit, ViewChild} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { UserComponent } from '../user/user.component';

export interface TeamDetails {
  
  releaseName: string;
  userName: string;
  model: string;
  role: string;
  availability: string;
}

const ELEMENT_DATA: TeamDetails[] = [
  {releaseName : "R6.05 Lot 31", userName : "Satheesh", model : "Scrum", role : "Scrum master", availability : "50"},
  {releaseName : "R6.05 Lot 31", userName : "Satheesh", model : "Scrum", role : "Team Member", availability : "100"},
  {releaseName : "R6.05 Lot 31", userName : "Bala", model : "Scrum", role : "Team Member", availability : "100"},
  {releaseName : "R6.05 Lot 31", userName : "Guna", model : "Scrum", role : "Team Member", availability : "100"},
  {releaseName : "R6.05 Lot 31", userName : "Aashiq", model : "Scrum", role : "Team Member", availability : "100"}
];    


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private service : UserService,
    private dialog : MatDialog
    ) { }

  displayedColumns: string[] = ['releaseName', 'userName', 'model', 'role', 'availability', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue : string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(UserComponent, dialogConfig);
  }

  onEdit(row) {
    //this.service.populateForm(row);
  }
}
