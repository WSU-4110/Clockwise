import React, {Component} from 'react';
import './App.css';
// importing a scheduling package that contains crud functions and skeleton layout 
// must import this library using "npm install '@syncfusion/ej2-react-schedule'"
import {Inject,ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize, EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'; // This library enables crud operations 
<link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />


export default class calendar extends React.Component <{}, {}>
{
  private localData =[{
    Id: 1, 
    Subject: 'CSC 4110 Lab', 
    StartTime: new Date(2022, 2, 24, 5, 0 ), 
    EndTime: new Date(2022, 2, 24, 7, 0 ), 
    Location: 'Prentis'
  }, 

  {
    Id: 2, 
    Subject: "CSC 4710 Project Part 2", 
    StartTime: new Date(2022, 2, 21, 6, 0 ), 
    EndTime: new Date(2022, 2, 28, 11, 0 ),
    Location: 'Canvas Submission'
  }]

  // Defining data manager and its properties 
  // remote url service retrieves data from POST and binds to the calendar 
  private remoteData = new DataManager
  ({
      url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData', 
      adaptor: new WebApiAdaptor, 
      crossDomain: true
  });
  
  // defining eventTemplate where you can access appointment data fields directly 
  private eventTemplate(props: {[key: string]: Object}): JSX.Element
  {
    return(<div className="template-wrap">{props.Subject}</div>);
  }

  // Presents the calendar -- can declare current view, selected date, and applies 
// the day, week, workweek, month, and agenda services from @syncfusion react library 
  public render() 
  {
    return <ScheduleComponent height='500px' selectedDate={new Date(2022, 2, 8)}
      eventSettings={{dataSource: this.localData}} >


      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
      </ScheduleComponent>
 
    }
}
