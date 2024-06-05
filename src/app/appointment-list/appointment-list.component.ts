import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent implements OnInit {

  newAppointmentTitle:string = "";
  newAppintmentDate:Date= new Date();
  appointments: Appointment[]=[]

  /**
   *
   */
  constructor() {
    let savedAppointments = localStorage.getItem("appointments")

    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }
  ngOnInit(): void {
    
  }

  addAppointment(){
    //alert(this.newAppointmentTitle + " " + this.newAppintmentDate)
    if(this.newAppointmentTitle.trim().length && this.newAppintmentDate){
      let newAppointment:Appointment ={
        id: Date.now(),
        title:this.newAppointmentTitle,
        date: this.newAppintmentDate
      }

      this.appointments.push(newAppointment)

      this.newAppointmentTitle= ""
      this.newAppintmentDate = new Date()

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index:number){
    this.appointments.splice(index, 1)
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }
}
