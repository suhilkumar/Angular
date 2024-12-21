import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-service-deep-dive',
  imports: [MatToolbarModule, RouterLink, RouterOutlet],
  templateUrl: './service-deep-dive.component.html',
  styleUrl: './service-deep-dive.component.scss'
})
export class ServiceDeepDiveComponent {

}
