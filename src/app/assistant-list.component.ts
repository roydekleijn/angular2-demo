import {Component, OnInit} from '@angular/core';
// import {MdToolbar} from '@angular2-material/toolbar';
// import {MdButton} from '@angular2-material/button';
// import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
// import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MatCardModule, MatInputModule, MatCheckboxModule} from '@angular/material';
// import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
// import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {AssistantService} from './shared/services/assistant/assistant.service';
import {Assistant, Name, Location, ProfilePicture} from './shared/model/assistants.model';

@Component({
  moduleId: module.id,
  selector: 'app-assistant-list',
  templateUrl: 'assistant-list.component.html',
  styleUrls: ['assistant-list.component.css'],
  // directives: [
  //   MD_SIDENAV_DIRECTIVES,
  //   MD_LIST_DIRECTIVES,
  //   MatCard,
  //   MdToolbar,
  //   MdButton,
  //   MatInput,
  //   MatCheckbox,
  //   MdRadioGroup,
  //   MdRadioButton,
  //   MdIcon
  // ],
  // providers: [MdIconRegistry, MdRadioDispatcher],

})
export class AssistantListAppComponent implements OnInit  {
  constructor(private assistantService:AssistantService) {
  }

  DEFAULT_ASSISTANTS:string = '5';
  formShowing:boolean = false;
  views:Object[] = [
    {
      name: "My Account",
      description: "Edit my account",
      icon: "assignment ind"
    },
    {
      name: "Next events",
      description: "Find incoming events!",
      icon: "event"
    }
  ];

  assistants:Assistant[];
  errorMessage:string;

  model:Assistant;

  add() {
    this.assistants.push(this.model);
    this.initModel();
  }

  getAssistants() {
    this.assistantService.getAssistants(this.DEFAULT_ASSISTANTS).subscribe(
      assistants => {
        this.assistants = assistants.results;
      },
      error => this.errorMessage = <any>error
    );
  }

  ngOnInit() {
    this.getAssistants();
    this.initModel();
  }

  initModel() {
    this.model = new Assistant(new Name('', ''), new Location(''), '', new ProfilePicture(''), '');
  }
}
