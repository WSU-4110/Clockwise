// Javascript Calendar Functionalities 
// This is currently pseudocode for how all the functions will be laid out
// Design Pattern: Command Pattern
// 

// Interface for command
interface Command
{
    execute();
}

// this is the calendar functions class
// and its corresponding command classes 
class CalendarFunction() 
{
    // function to add event 
     addEvent()
    {
        // code for appending event to the calendar
        // takes the name date tine and duration
    }

    // function to delete event 
    deleteEvent()
    {
        // code for deleting or releasing memory 
        // of a preexisting event from the calendar

    }

    // function to edit events 
    editEvent()
    {
        // code to enable user to edit the fields 
        // of date name time duration of an event 
    }
}

// adding event class which implements the command interface
// this is so it inherits the execute function
class addEventCmd extends Command
{

    addEventCmd(Event event)
    {
        this.event = event;
    }

    // inherited from command class 
    execute()
    {
        // code for executing the add functionality to the calendar
    }
}

class deleteEventCmd extends Command
{

    deleteEventCmd(Event event)
    {
        this.event = event;
    }

    // inherited from command class
    execute()
    {
        // code for executing the delete functionality to the calendar
    }
}

class editEventCmd extends Command
{

    deleteEventCmd(Event "event")
    {
        this.event = event;
    }

    // inherited from command class
    execute()
    {
        // code for executing the edit functionality to the calendar
    }
}
