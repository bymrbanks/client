import React from "react";
import { useBudget } from "~/context/budget";
function MonthlySlider() {
  const { selectedMonth: date, setSelectedMonth } = useBudget();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const nextMonth = () => {
    let currentMonth = date.getMonth();
    let nextMonth = currentMonth + 1;
    setSelectedMonth(new Date(date.setMonth(nextMonth)));
    console.log(date);
  };

  const prevMonth = () => {
    let currentMonth = date.getMonth();
    let nextMonth = currentMonth - 1;
    setSelectedMonth(new Date(date.setMonth(nextMonth)));
  };

  return (
    <div className="monthly-slider">
      <div className="monthly-slider__prev-arrow" onClick={prevMonth}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </div>
      <div className="monthly-slider__month">
        {month}, {year}
      </div>
      <div className="monthly-slider__next-arrow" onClick={nextMonth}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </div>
    </div>
  );
}

export default MonthlySlider;
