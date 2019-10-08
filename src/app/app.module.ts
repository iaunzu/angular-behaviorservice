import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AlertPanelComponent } from "./alerts/alert-panel.component";
import { AlertResetterComponent } from "./alerts/alert-resetter.component";
import { AlertIncComponent } from "./alerts/alert-inc.component";

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AlertPanelComponent,
    AlertResetterComponent,
    AlertIncComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
