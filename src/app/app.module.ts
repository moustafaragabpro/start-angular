import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaLayoutComponent } from './sa-layout/sa-layout.component';
import { SaHomeComponent } from './sa-home/sa-home.component';
import { SaAboutComponent } from './sa-about/sa-about.component';
import { SaContactsComponent } from './sa-contacts/sa-contacts.component';
import { SaPortfolioComponent } from './sa-portfolio/sa-portfolio.component';
import { SaNavbarComponent } from './sa-navbar/sa-navbar.component';
import { SaFooterComponent } from './sa-footer/sa-footer.component';
import { HeadingComponent } from './shared/heading/heading.component';
import { ModalComponent } from './sa-portfolio/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SaLayoutComponent,
    SaHomeComponent,
    SaAboutComponent,
    SaContactsComponent,
    SaPortfolioComponent,
    SaNavbarComponent,
    SaFooterComponent,
    HeadingComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
