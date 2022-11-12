import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaAboutComponent } from './sa-about/sa-about.component';
import { SaContactsComponent } from './sa-contacts/sa-contacts.component';
import { SaHomeComponent } from './sa-home/sa-home.component';
import { SaPortfolioComponent } from './sa-portfolio/sa-portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SaHomeComponent },
  { path: 'portfolio', component: SaPortfolioComponent },
  { path: 'about', component: SaAboutComponent },
  { path: 'contact', component: SaContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
