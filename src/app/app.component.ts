import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19';
  constructor(private session : SessionService){
    if(!this.session.getItems("isloggedIn")){
      this.session.setItems("isLoggedIn", true)
    }
  }
}
