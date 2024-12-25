import RecruitPreview from '@/components/recruit/RecruitPreview';
import { TRecruitCalendar, TRecruitPreview } from '@/model/recruit';
import { useState } from 'react';

interface PCalendar {
  weekCalendarList: TRecruitCalendar[][];
}

const Calendar: React.FC<PCalendar> = ({ weekCalendarList }) => {
  const [hoveredPreview, setHoveredPreview] = useState<TRecruitPreview | null>(null);

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
      <tbody className='divide-y divide-calender-border border border-calender-border bg-white'>
        {weekCalendarList.map((week, rIdx) => (
          <tr key={rIdx} className='grid min-h-48 grid-cols-7 divide-x divide-calender-border'>
            {week.map(({ day, events }, cIdx) =>
              day === 0 ? (
                <td key={cIdx}></td>
              ) : (
                <td key={cIdx} className='pb-16'>
                  <div className='px-3 py-2.5 text-right text-body2 font-bold'>{day}</div>
                  <section className='px-1'>
                    {events.map((event) => (
                      <div
                        key={event.id}
                        onMouseEnter={() => setHoveredPreview(event)}
                        onMouseLeave={() => setHoveredPreview(null)}
                      >
                        <RecruitPreview
                          isStart={event.startDate.getDate() === day}
                          isHovered={
                            hoveredPreview?.startDate === event.startDate || hoveredPreview?.endDate === event.endDate
                          }
                          {...event}
                        />
                      </div>
                    ))}
                  </section>
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
