/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = {
    family: 4
  }
) {
  let full_time = 1300;
  let week = 0;

  if (knowsProgramming) {
    full_time -= 500;
  }

  for (let key in config) {
    if (key === focus) {
      week = Math.ceil(full_time / config[key]);
    }
  }

  return week;
};