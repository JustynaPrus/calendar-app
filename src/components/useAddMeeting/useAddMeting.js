import { useState } from "react";
import dataList from "../../Data/allData";

export const useAddMeeting = () => {
  const [allData, setAllData] = useState(dataList);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const addMeeting = (data) => {
    const newMeetings = allData.map((el) => {
      if (data.date === el.date) {
        el.meetings = [...el.meetings, data];
      }
      return el;
    });
    setAllData(newMeetings);
    console.log(allData);
  };

  const addActive = (el) => {
    if (activeIndex + el.dayId <= activeIndex + 5) {
      setIsActive(true);
    }
    console.log(isActive);
  };

  return {
    addMeeting,
    addActive,
    isActive,
    activeIndex,
    allData,
  };
};
