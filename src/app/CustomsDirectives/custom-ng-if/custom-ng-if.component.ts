import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MyNgIfDirective } from '../../directives/my-ng-if.directive';
import { RepeatTimesDirective } from '../../directives/repeat-times.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-ng-if',
  imports: [MatButtonModule, MyNgIfDirective, RepeatTimesDirective, FormsModule],
  templateUrl: './custom-ng-if.component.html',
  styleUrl: './custom-ng-if.component.scss'
})
export class CustomNgIfComponent {
  isVisible =false;
  count = 0;
}
