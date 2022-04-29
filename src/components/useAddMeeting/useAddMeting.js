import { useState } from "react";
import dataList from "../../Data/allData";

export const useAddMeeting = () => {
  const [dataMeetings, setDataMeetings] = useState([]);
  const [allData, setAllData] = useState(dataList);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const addMeeting = (data) => {
    setDataMeetings(data);
    console.log(dataMeetings);
    allData.forEach((el) => {
      if (dataMeetings.date === el.date) {
        el.meetings.push(dataMeetings);
      }
    });
    setAllData(allData);
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
