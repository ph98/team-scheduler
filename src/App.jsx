import TUICalendar from "@toast-ui/react-calendar";
import { useState } from "react";

import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import './App.css';

function App() {
  const [schedules, setSchedules] = useState([]);

  const updateSchedule = (start, end) => {

    const newScheduleItem = {
      calendarId: "1",
      category: "time",
      isVisible: true,
      isReadOnly:false,
      title: "Parham",
      id: "1",
      body: "Test",
      start,
      end,
    }
    setSchedules([...schedules, newScheduleItem])
  }
  console.log(`schedules`, schedules)
  return (
    <div className="App">
      <TUICalendar
        // ref={cal}
        calendars={{}}
        usageStatistics={false}
        height="100%"
        view="week"
        taskView={false}
        scheduleView={['time']} 
        week={{startDayOfWeek:6, 
        daynames:[
          'یکشنبه',
          'دوشنبه',
          'سه شنبه',
          'چهار شنبه',
          'پنج شنبه',
          'جمعه',
          'شنبه',
        ],
        
      }}
        
        // template={templates}
        // calendars={calendars}
        schedules={[...schedules]}
        onClickSchedule={e=>console.log(`e`, e)}
        onBeforeCreateSchedule={e=>updateSchedule(e.start, e.end)}
        // onBeforeDeleteSchedule={onBeforeDeleteSchedule}
        // onBeforeUpdateSchedule={onBeforeUpdateSchedule}
      />
    
    </div>
  );
}

export default App;
