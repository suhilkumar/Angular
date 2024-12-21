import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { DependencyProvidersComponent } from '../dependency-providers/dependency-providers.component';
import { InjectionHeirarchyComponent } from '../injection-heirarchy/injection-heirarchy.component';
@Component({
  selector: 'app-learn-di',
  imports: [
    MatExpansionModule,
    MatListModule,
    DependencyProvidersComponent,
    InjectionHeirarchyComponent,
  ],
  templateUrl: './learn-di.component.html',
  styleUrl: './learn-di.component.scss',
  providers: [],
})
export class LearnDIComponent {
  // test @optional

  constructor() {}
}
