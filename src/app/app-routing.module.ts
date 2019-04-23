import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

const app_routes: Routes = [
  { path: '', component: PortafolioComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}

];
@NgModule({
  imports: [
    RouterModule.forRoot( app_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {

}
