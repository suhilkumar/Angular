import { Component, Self } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  providers: [UserService]
})
export class ParentComponent {
constructor(
  @Self() private user: UserService
){
  this.user.print("parent")
}
}
