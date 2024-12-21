import { Routes } from '@angular/router';
import { ValueAccessorExampleComponent } from './complex-form-control/value-accessor-example/value-accessor-example.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ServiceDeepDiveComponent } from './service-deep-dive/service-deep-dive.component';
import { TasksComponent } from './taskApp/tasks/tasks.component';
import { LearnDIComponent } from './DI/learn-di/learn-di.component';
import { CustomDirectivesComponent } from './CustomsDirectives/custom-directives/custom-directives.component';
import { CustomStructualDirectivesComponent } from './CustomsDirectives/custom-structual-directives/custom-structual-directives.component';
import { AttributesComponent } from './CustomsDirectives/attributes/attributes.component';
import { CustomNgIfComponent } from './CustomsDirectives/custom-ng-if/custom-ng-if.component';
import { LearnNgTemplateGuardComponent } from './learn-ng-template-guard/learn-ng-template-guard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path:"custom-directives",
        component:CustomDirectivesComponent,
        children: [
          {path:"custom-structural", component:CustomStructualDirectivesComponent},
          {path:"custom-attribute", component: AttributesComponent},
          {path : "custom-structural-ngif", component: CustomNgIfComponent}
        ]
      },
      {
        path: 'controlvalueaccessor',
        component: ValueAccessorExampleComponent,
      },
      {
        path: 'service',
        component: ServiceDeepDiveComponent,
        children: [{ path: 'taskapp', component: TasksComponent }],
      },
      {
        path: 'di',
        component: LearnDIComponent
      },
      {
        path: "ng-template-guard",
        component: LearnNgTemplateGuardComponent
      }
    ],
  },
  { path: 'login', component: LoginComponent },
];
