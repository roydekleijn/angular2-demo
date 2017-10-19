import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AssistantListAppComponent} from "./assistant-list.component";
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {AssistantService} from "./shared/services/assistant/assistant.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AssistantListAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, FormsModule, MatCardModule, MatToolbarModule,
    MatIconModule,
    MatButtonModule,

  ],
  exports: [MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
],
  providers: [AssistantService],
  bootstrap: [AssistantListAppComponent]
})
export class AppModule {
}
