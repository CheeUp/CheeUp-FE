interface PCalendar {
  weekCalendarList: number[][];
}

const Calendar: React.FC<PCalendar> = ({ weekCalendarList }) => {
  return (
    <table className='w-full'>
      <thead className='border border-calender-border'>
        <tr className='grid grid-cols-7 divide-x divide-calender-border bg-calender-header text-body1 font-bold'>
          <th>SUN</th>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THR</th>
          <th>FRI</th>
          <th>SAT</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-calender-border border border-calender-border'>
        {weekCalendarList.map((week, rIdx) => (
          <tr key={rIdx} className='grid min-h-48 grid-cols-7 divide-x divide-calender-border'>
            {week.map((day, cIdx) =>
              day === 0 ? (
                <td key={cIdx}></td>
              ) : (
                <td key={cIdx} className='px-3 pb-16'>
                  <div className='py-2.5 text-right text-body2 font-bold'>{day}</div>
                </td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
