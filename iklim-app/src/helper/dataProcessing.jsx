const dateTimes = [];

export const dataWeather = data => {
  const dataDays = groupingDays(data);

  if (dataDays) {
    return countingAverage(dataDays);
  }
  return null;
};

export const groupingDays = data => {
  console.log("data meluncur... ", data);
  for (let i = 0; i < data.length; i++) {
    const { dt_txt } = data[i];
    const date = getDate(dt_txt);
    const { temp, temp_min, temp_max } = data[i].main;

    if (!dateTimes[date]) {
      const dataWeather = {
        total: 1,
        temperature: temp,
        difference: temp_max - temp_min
      };
      dateTimes[date] = dataWeather;
    } else {
      const dataWeather = {
        total: dateTimes[date].total + 1,
        temperature: dateTimes[date].temperature + temp,
        difference: dateTimes[date].difference + (temp_max - temp_min)
      };

      dateTimes[date] = dataWeather;
    }
  }
  return dateTimes;
};

const getDate = dt => {
  const newDt = dt.split(" ");
  return newDt[0].split("-").join(" - ");
};

const countingAverage = data => {
  const dataNew = Object.entries(data);

  for (let i = 0; i < dataNew.length; i++) {
    const tempr = dataNew[i][1].temperature;
    const total = dataNew[i][1].total;

    dataNew[i][1].averageTemp = tempr / total;
  }

  for (let j = 0; j < dataNew.length; j++) {
    const differ = dataNew[j][1].difference;
    const total = dataNew[j][1].total;

    dataNew[j][1].averageDiff = differ / total;
  }

  return dataNew;
};
