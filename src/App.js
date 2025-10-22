import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>営業日カレンダー</h1>
      <Calendar locale="ja-JP" onChange={setDate} value={date} />
    </div>
  );
}

export default App;
