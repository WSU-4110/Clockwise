import React from 'react';
import './App.css';
// importing a scheduling package that contains crud functions and skeleton layout 
import {Inject,ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize, GroupModel} from '@syncfusion/ej2-react-schedule';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkFhWX5Wc3xQRmBfVUc=');


export default class calendar extends React.Component <{}, {}>
{
  // Local Declared JSON data
  private localData = 
  [
  {
    Id: 1, 
    Subject: 'Software Presentation', 
    StartTime: new Date(2022, 2, 24, 17, 0 ), 
    EndTime: new Date(2022, 2, 24, 19, 0 ), 
    Location: 'Prentis'
  }, 

  {
    Id: 2, 
    Subject: "Spring Break", 
    StartTime: new Date(2022, 2, 14, 6, 0 ), 
    EndTime: new Date(2022, 2, 18, 22, 0 ),
    Location: 'Florida'
  }, 

  {
    Id: 3, 
    Subject: "Doctor's Appointment", 
    StartTime: new Date(2022, 2, 5, 10, 0), 
    EndTime: new Date(2022, 2, 5, 11, 0 ),
    Location: 'Henry Ford'
  },

  {
    Id: 4, 
    Subject: "Project Log 2", 
    StartTime: new Date(2022, 2, 28, 1, 0 ), 
    EndTime: new Date(2022, 2, 28, 13, 0 ),
    Location: 'Canvas Submission'
  },

  {
    Id: 5, 
    Subject: "CSC 4710 Project Part 2", 
    StartTime: new Date(2022, 2, 29, 1, 0 ), 
    EndTime: new Date(2022, 2, 29, 23, 0 ),
    Location: 'Canvas Submission'
  },

  {
    Id: 6, 
    Subject: "Software Midterm", 
    StartTime: new Date(2022, 2, 3, 16, 0 ), 
    EndTime: new Date(2022, 2, 3, 17, 0 ),
    Location: 'State Hall'
  }, 

  {
    Id: 7, 
    Subject: "St. Patrick's Day", 
    StartTime: new Date(2022, 2, 17, 0, 0), 
    EndTime: new Date(2022, 2, 17, 23, 0),
    isAllDay: true
  },

    {
      Id: 8, 
      Subject: "New Year's Day", 
      StartTime: new Date(2022, 0, 1 , 0, 0 ), 
      EndTime: new Date(2022, 0, 1, 23, 0 ),
      isAllDay: true
    },

    {
      Id: 9, 
      Subject: "MLK Day", 
      StartTime: new Date(2022, 0, 16 , 0, 0 ), 
      EndTime: new Date(2022, 0, 16, 23, 0 ),
      isAllDay: true
    },

    {
      Id: 10, 
      Subject: "Valentine's Day", 
      StartTime: new Date(2022, 1, 14 , 0, 0), 
      EndTime: new Date(2022, 1, 14, 23, 0),
      isAllDay: true
    },

    {
      Id: 11, 
      Subject: "Groundhog Day", 
      StartTime: new Date(2022, 1, 2 , 0, 0 ), 
      EndTime: new Date(2022, 1, 2, 23, 0 ),
      isAllDay: true
    },

    {
      Id: 12, 
      Subject: "Easter", 
      StartTime: new Date(2022, 3, 17 , 0, 0 ), 
      EndTime: new Date(2022, 3, 17, 23, 0 ),
      isAllDay: true
    },

    {
      Id: 13, 
      Subject: "Eid Ul-Fitr", 
      StartTime: new Date(2022, 4, 2 , 0, 0 ), 
      EndTime: new Date(2022, 4, 3, 23, 0 ),
      isAllDay: true
    },

    {
      Id: 14, 
      Subject: "Summer Solstice", 
      StartTime: new Date(2022, 5, 21 , 0, 0 ), 
      EndTime: new Date(2022, 5, 21, 23, 0 ),
      isAllDay: true
    },

    {
      Id: 23, 
      Subject: "Eid Al-Adha", 
      StartTime: new Date(2022, 6, 9 , 0, 0 ), 
      EndTime: new Date(2022, 6, 10, 23, 0 ),
      isAllDay: true
    },

    {
      Id: 15, 
      Subject: "Independence Day", 
      StartTime: new Date(2022, 6, 4 , 0, 0 ), 
      EndTime: new Date(2022, 6, 4, 23, 0 ),
      isAllDay: true
    },

    {
      Id: 16, 
      Subject: "Fall 2022 Semester Begins", 
      StartTime: new Date(2022, 7, 30 , 11, 0 ), 
      EndTime: new Date(2022, 7, 30, 23, 0 ),
      isAllDay: true
    }, 

    {
      Id: 17, 
      Subject: "Autumn Equinox", 
      StartTime: new Date(2022, 8, 22 , 0, 0 ), 
      EndTime: new Date(2022, 8, 22, 23, 0 ),
      isAllDay: true
    }, 

    {
      Id: 18, 
      Subject: "Halloween", 
      StartTime: new Date(2022, 9, 31 , 0, 0 ), 
      EndTime: new Date(2022, 9, 31, 23, 0 ),
      isAllDay: true
    }, 

    {
      Id: 19, 
      Subject: "Thanksgiving Day",
      StartTime: new Date(2022, 10, 24 , 0, 0 ), 
      EndTime: new Date(2022, 10, 24, 23, 0 ),
      isAllDay: true
    }, 

    {
      Id: 20, 
      Subject: "Christmas", 
      StartTime: new Date(2022, 11, 25 , 0, 0 ), 
      EndTime: new Date(2022, 11, 25, 1, 0 ),
      isAllDay: true
    },

    {
      Id: 21, 
      Subject: "New Year's Eve", 
      StartTime: new Date(2022, 11, 31 , 0, 0 ), 
      EndTime: new Date(2022, 11, 31, 23, 0 ),
      isAllDay: true
    },

    {
      Id: 22, 
      Subject: "New Year's Eve", 
      StartTime: new Date(2022, 11, 31 , 0, 0 ), 
      EndTime: new Date(2022, 11, 31, 1, 0 ),
      isAllDay: true
    },

];

  
  // defining eventTemplate where you can access appointment data fields directly
  // this will enable customization of appointments - color coding, etc.  
  private eventTemplate(props: {[key: string]: Object}): JSX.Element
  {
    return(<div data-testid="temp-wrap" className="template-wrap">{props.SecondaryColor}</div>)
  }

  public resourceDataSource: Object[] = [
    {Name: 'Helen', Id:1, Color: '#6A4FEC'},
    {Name: 'Tom', Id:2, Color: '#6A4FEC'},
    {Name: 'Jerry', Id:3, Color: '#6A4FEC'}
  ]


  public groupData:GroupModel = {
    resources:['Resources']
  };

  public groupDataSource: object[] = [
    {Name: 'Task 1', Id:1, Color: '#6A4FEC', GroupId: 1 }, 
    {Name: 'Task 2', Id:2, Color: '#DD0DF7', GroupId: 2 }, 
    {Name: 'Task 3', Id:3, Color: '#0DF7BB', GroupId: 3 }, 
  ];

// Presents the calendar -- can declare current view, selected date, and applies 
// the day, week, workweek, month, and agenda services from @syncfusion react library 
  public render() 
  {
    
    return <ScheduleComponent currentView = "Month" height='500px' selectedDate={new Date(2022, 3, 8)}
        
      eventSettings={{dataSource: this.localData}} >


      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
      </ScheduleComponent>
 
    }
}

