import { Component } from '@angular/core';
import { Animal, IsDogDirective } from '../directives/is-dog.directive';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-learn-ng-template-guard',
  imports: [IsDogDirective, JsonPipe],
  templateUrl: './learn-ng-template-guard.component.html',
  styleUrl: './learn-ng-template-guard.component.scss',
})
export class LearnNgTemplateGuardComponent {
  animal: Animal = {
    name: 'Rocky',
    breed: 'Pit Bull',
    type: 'Dog',
  };
}
