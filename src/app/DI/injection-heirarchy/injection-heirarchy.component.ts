import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { ParentComponent } from "../parent/parent.component";

@Component({
  selector: 'app-injection-heirarchy',
  imports: [MatExpansionModule, MatListModule, ParentComponent],
  templateUrl: './injection-heirarchy.component.html',
  styleUrl: './injection-heirarchy.component.scss'
})
export class InjectionHeirarchyComponent {

}
