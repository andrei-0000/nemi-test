import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBusServiceComponent } from './add-bus-service/add-bus-service.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'addbusservice',
    component: AddBusServiceComponent,
    title: 'Add Bus Service',
  },
];
export default routeConfig;
