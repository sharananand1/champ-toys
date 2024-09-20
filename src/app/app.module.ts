import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedHeaderModule } from './shared-header/shared-header.module';
import { SharedFooterModule } from './shared-footer/shared-footer.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedHeaderModule,
    SharedFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
