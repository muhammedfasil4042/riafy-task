import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/services/meterial/meterial.module';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './shared/services/app-config.service';
/**
 * Initialize application configuration
 * @param objAppConfigService 
 */
 const appInitializerFn = (objAppConfigService: AppConfigService) => {
  return () => {
    return objAppConfigService.setConfig();
  };
};
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [ AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
