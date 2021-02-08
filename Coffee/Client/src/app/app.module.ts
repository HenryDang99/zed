import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'


// application module
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';

import { HttpProvider, OrderProvider } from './providers';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HttpProvider,
    OrderProvider,
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function getBaseUrl() {
  return document.getElementsByTagName('baseApi')[0].getAttribute('href');
}
