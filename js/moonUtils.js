/*Epact is the excess of the solar year over twelve lunar months.
 *It represents the moon age at the beginning of the year
 *
 * There are several methods to calculate the epact, but the easiest
 * way is to use a table with the pre-calculated values.
 *
 * Keep in mind that according to the Lunar Cycle or Menton Cycle,
 * the values are repeated every 19 years, so to calculate the epact
 * of a year that is not in the table, you have to add or subtract 19
 * years as many times as they are necessary to enter within the range of
 * values in the table
 *
 * DO NOT TOUCH!!!!
 * */
function getEpact(year) {
  if (!year) {
    throw "The argument is not optional";
  } else if (isNaN(year) || !Number.isInteger(year)) {
    throw "Invalid argument";
  }

  let sign = -1;
  if (year < 2000) {
    sign = 1;
  }
  while (year < 2000 || year > 2018) {
    year += sign * 19;
  }
  /*The first value in the table corresponds to the year 2000 and the last one to 2018*/
  return [
    24, 5, 16, 28, 9, 20, 1, 12, 22, 3, 15, 25, 7, 18, 0, 11, 22, 2, 14,
  ].at(year - 2000);
}

/*The monthly correction is a numerical value that is taken from the following table
 *   Month          Correction
 *   January        0
 *   February       1
 *   March          0
 *   April          1
 *   May            2
 *   June           3
 *   July           4
 *   August         5
 *   September      6
 *   October        7
 *   November       8
 *   December       9
 *   But, since we haven't seen Arrays yet, only String methods are allowed.
 *   Beware!! Split is forbidden
 *
 *   if the parameter is not numeric, is not integer or is not between 1 and 12,
 *   the function must return -1
 * */
function getMonthlyCorrection(month) {
  const correction = "010123456789";
  if (!month) {
    return -1;
  } else if (isNaN(month) || !Number.isInteger(month)) {
    return -1;
  } else if (1 >= month && month <= 12) {
    return -1;
  }

  return correction.charAt(month - 1); //Must return the monthly correction
}

/*The formula of the Moon Age is as follow:
 * Moon Age = Epact + Monthly Correction + day of the month
 * If the number obtained is greater than 30 days, substract
 * 30 to obtain the value
 *
 * This function returns the Moon Age of a given data*/
function getMoonAge(date) {
  return; //Must return the moon age
}

/*
 * The lunar phase depends on the Moon Age according to the following table.
 *   Name             Age
 *   New Moon         0
 *   Waxing crescent  1 - 6
 *   First Quarter    7
 *   Waxing gibbous   8 - 14
 *   Full Moon        15
 *   Waning gibbous   16 - 21
 *   Last quarter     22
 *   Waning crescent  23 - 29
 * Use a switch statement to return a string with the name of the
 * lunar phase corresponding to the moon age
 * */
function getMoonPhase(age) {}
