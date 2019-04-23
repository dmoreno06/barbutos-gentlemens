import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app-routing.module';

import { AppComponent } from './app.component';
import { LogoComponent } from './shared/logo/logo.component';
import { BannerComponent } from './shared/banner/banner.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SliderComponent } from './pages/slider/slider.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { FeaturesComponent } from './pages/features/features.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    BannerComponent,
    MenuComponent,
    SliderComponent,
    FooterComponent,
    PortafolioComponent,
    GalleryComponent,
    ContactComponent,
    ServicesComponent,
    AboutComponent,
    FeaturesComponent,
    EmployeesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
