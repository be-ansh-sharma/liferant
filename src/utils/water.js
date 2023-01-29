import dayjs from 'dayjs';
var isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

export const calculateDailyGoal = person => {
  let { weight, weightType, exerciseMinutes } = person;
  let dailyGoal, dailyGoalType;
  switch (weightType) {
    case 'Kg':
      dailyGoal = weight * 2.205 * (2 / 3) + (exerciseMinutes / 30) * 12;
      dailyGoal = Math.ceil(dailyGoal * 29.57);
      dailyGoalType = 'ml';
      break;
    case 'lbs':
      dailyGoal = Math.ceil(weight * (2 / 3) + (exerciseMinutes / 30) * 12);
      dailyGoalType = 'oz.';
      break;
    default:
      dailyGoal = null;
  }

  return {
    ...person,
    dailyGoal,
    dailyGoalType,
  };
};

export const calculateSchedule = (person, cup, sleepArray, wakeArray) => {
  let quiteTime = {
    0: {
      start: {
        hour: sleepArray[0],
        minute: sleepArray[1],
      },
      end: {
        hour: wakeArray[0],
        minute: wakeArray[1],
      },
    },
  };
  quiteTime = setQuiteTime(quiteTime);
  let interval = getInterval(person?.dailyGoal, quiteTime, cup) * 60;
  return getTodayNotification(quiteTime, interval);
};

export const getInterval = (dailyGoal, quiteTimes, cup) => {
  let totalQuiteTime = 0;
  Object.keys(quiteTimes).map(key => (totalQuiteTime += quiteTimes[key].diff));
  return +(
    (24 - totalQuiteTime) /
    Math.ceil((dailyGoal + cup / 2) / cup)
  ).toFixed(1);
};

export const setQuiteTime = time => {
  let start = time[0].start;
  let end = time[0].end;
  let startTime = dayjs()
    .hour(start.hour)
    .minute(start.minute)
    .second(0)
    .millisecond(0);
  let endTime = dayjs()
    .hour(end.hour)
    .minute(end.minute)
    .second(0)
    .millisecond(0);

  if (start.hour > 12 && end.hour < 12) {
    endTime = endTime.add(1, 'day');
  }

  let timeObj = {
    0: {
      start,
      end,
      diff: endTime.diff(startTime, 'hour'),
    },
  };

  return timeObj;
};

export const getTodayNotification = (
  quiteTimes,
  minutes,
  current = dayjs().hour(0).minute(0).second(0).millisecond(0),
) => {
  let notifications = [];
  let endDate = current
    .add(1, 'day')
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0);
  while (current.isBefore(endDate)) {
    current = current.add(minutes, 'minute');
    let hasConflict = false;

    for (const key in quiteTimes) {
      let time = quiteTimes[key];
      let start = time.start;
      let end = time.end;
      let startTime = current
        .hour(start.hour)
        .minute(start.minute)
        .second(0)
        .millisecond(0);
      let endTime = current
        .hour(end.hour)
        .minute(end.minute)
        .second(0)
        .millisecond(0);

      if (start.hour > end.hour) {
        let previousDayStartTiem = startTime.subtract(1, 'day');
        hasConflict =
          current.isBetween(previousDayStartTiem, endTime) ||
          current.isBetween(
            startTime,
            current.add(1, 'day').hour(0).minute(0).second(0).millisecond(0),
          );
        if (hasConflict) {
          break;
        }
        continue;
      }

      hasConflict = current.isBetween(startTime, endTime);

      if (hasConflict) {
        break;
      }
    }

    if (!hasConflict && current.isBefore(endDate)) {
      notifications.push(current.format('hh:mm A'));
    }
  }

  return notifications;
};
