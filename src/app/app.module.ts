import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AssistantListAppComponent} from "./assistant-list.component";
import {MatButtonModule, MatCheckboxModule, MatInputModule} from "@angular/material";
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
    MatButtonModule, MatCheckboxModule, MatInputModule, FormsModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule],
  providers: [AssistantService],
  bootstrap: [AssistantListAppComponent]
})
export class AppModule {
}
