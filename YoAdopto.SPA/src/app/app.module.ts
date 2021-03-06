import { MissingContainerComponent } from './missing/missing-container/missing-container.component';
import { PublicationService } from './_services/publication.service';
import { PublicationListComponent } from './_shared/publication/publication-list/publication-list.component';
import { RegisterComponent } from './auth/register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthService } from './_services/auth.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRouters } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { BsDropdownModule } from 'ngx-bootstrap';
import { MissingComponent } from './missing/missing.component';
import { PublicationsResolver } from './_resolvers/publications.resolver';
import { PublicationCardComponent } from './_shared/publication/publication-card/publication-card.component';
import { PublicationDetailComponent } from './_shared/publication/publication-detail/publication-detail.component';
import { PublicationDetailResolver } from './_resolvers/publication-detail.resolver';
import { NgxGalleryModule } from '../../node_modules/ngx-gallery';
import { PublicationFormComponent } from './_shared/publication/publication-form/publication-form.component';

export function getAccessToken(): string {
  return localStorage.getItem('token');
}

export const jwtConfig = {
  tokenGetter: getAccessToken,
  whitelistedDomains: ['localhost:5000']
};

@NgModule({
   declarations: [
      AppComponent,
      WelcomeComponent,
      NavbarComponent,
      LoginComponent,
      RegisterComponent,
      MissingContainerComponent,
      MissingComponent,
      PublicationListComponent,
      PublicationCardComponent,
      PublicationDetailComponent,
      PublicationFormComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      CollapseModule.forRoot(),
      AppRouters,
      JwtModule.forRoot({
        config: jwtConfig
      }),
      BsDropdownModule.forRoot(),
      NgxGalleryModule
   ],
   providers: [
     AuthService,
     AlertifyService,
     JwtHelperService,
     PublicationService,
     PublicationsResolver,
     PublicationDetailResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
