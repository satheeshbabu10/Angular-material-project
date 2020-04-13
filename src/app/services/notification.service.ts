import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackbar :  MatSnackBar) { }

  

  public success(msg) {
    this.snackbar.open(msg, '');
  }


}
