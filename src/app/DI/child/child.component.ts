import { Component, Self } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  providers:[UserService]
})
export class ChildComponent {
constructor(
  @Self() private user: UserService
){
  this.user.print("child")

}
}
