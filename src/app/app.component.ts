import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  events: Array<any> = [
    {time: '08:00', subject: 'Breakfast with Simon', location: 'Lounge Caffe', description: 'Discuss Q3 targets'},
    {time: '08:30', subject: 'Daily Standup Meeting (recurring)', location: 'Warsaw Spire Office'},
    {time: '09:00', subject: 'Call with HRs'},
    {time: '12:00', subject: 'Lunch with Timmoty', location: 'Canteen', description: 'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a'},
  ];

  @ViewChild(ModalDirective,{ static: true}) modal: ModalDirective;
  

  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();

  deleteEvent(event: any) {
    const itemIndex = this.events.findIndex(el => el === event);
    this.events.splice(itemIndex, 1);
  }
addNewEvent() {
  const newEvent: any = {
    time: this.timeInput.value,
    subject: this.subjectInput.value,
    location: this.locationInput.value,
    description: this.descriptionInput.value
  };

  this.events.push(newEvent);

  this.timeInput.setValue('');
  this.subjectInput.setValue('');
  this.locationInput.setValue('');
  this.descriptionInput.setValue('');

  this.modal.hide();
}

}
