import { Component, ViewEncapsulation } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-custom-directives',
  imports: [RouterOutlet, RouterLink, MatListModule],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CustomDirectivesComponent {}
