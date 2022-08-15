import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './desktop-components/header/header.component';
import { EventPickerComponent } from './desktop-components/event-picker/event-picker.component';
import { SidebarComponent } from './desktop-components/sidebar/sidebar.component';
import { LoginComponent } from './desktop-components/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMasonryModule } from 'ngx-masonry';
import { ListItemEventComponent } from './desktop-components/list-item-event/list-item-event.component';
import { DashboardComponent } from './desktop-components/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './desktop-components/profile/profile.component';
import { EventComponent } from './desktop-components/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventPickerComponent,
    SidebarComponent,
    LoginComponent,
    ListItemEventComponent,
    DashboardComponent,
    ProfileComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxMasonryModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
