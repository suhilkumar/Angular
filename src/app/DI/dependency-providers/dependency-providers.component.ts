import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dependency-providers',
  imports: [MatListModule, MatExpansionModule],
  templateUrl: './dependency-providers.component.html',
  styleUrl: './dependency-providers.component.scss',
  preserveWhitespaces:true,
  
})
export class DependencyProvidersComponent {

}
