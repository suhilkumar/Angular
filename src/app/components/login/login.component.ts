import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ILogin } from '../../types/login.type';
import { SessionService } from '../../services/session.service';
@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user = 'suhil';
  password = '123';
  error!: string;
  private snackBar = inject(MatSnackBar)
  constructor(private router: Router, private session: SessionService) {}

  login(value: ILogin) {

    console.log(value);
    
    const userName = value.userName;
    const pass = value.password;

    if (userName !== this.user) {
      this.error = ' please enter correct user name';
      this.session.setItems("isLoggedIn", "false");
      return;
    }
    if (pass !== this.password) {
      this.error = 'Please enter correct password';
      this.session.setItems("isLoggedIn", "false");

      return;
    }

    this.session.setItems("isLoggedIn", "true");
    this.router.navigate(['home']);
    return this.error = "";
  }
}
