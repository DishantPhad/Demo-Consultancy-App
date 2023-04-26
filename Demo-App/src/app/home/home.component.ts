 import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dialogRef: MatDialog){}

  openDialog(){
    this.dialogRef.open(RegistrationFormComponent);
  }
  
}

