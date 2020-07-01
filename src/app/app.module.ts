import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { SafePipe } from './safe.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewFeedComponent } from './pages/new-feed/new-feed.component';
import { PersonalProfileComponent } from './pages/personal-profile/personal-profile.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    SafePipe,
    NavbarComponent,
    NewFeedComponent,
    PersonalProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
