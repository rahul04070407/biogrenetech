import { Routes } from '@angular/router';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: ComingSoonComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'services',
    component: ComingSoonComponent,
  },
  { path: 'coming-soon', component: ComingSoonComponent }

];
