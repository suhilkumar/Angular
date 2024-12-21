import { Component } from '@angular/core';
import { HasPermissionDirective } from '../../directives/has-permission.directive';
import { DynamicListDirective } from '../../directives/dynamincList.directive';

@Component({
  selector: 'app-custom-structual-directives',
  imports: [HasPermissionDirective, DynamicListDirective],
  templateUrl: './custom-structual-directives.component.html',
  styleUrl: './custom-structual-directives.component.scss'
})
export class CustomStructualDirectivesComponent {
isActive = "adminn"
items!: string[]
ngOnInit(){
  if(this.isActive === "admin")
  {
    console.log(true)
  }

  this.items = ["suhil", "Rucha"]
}


}
