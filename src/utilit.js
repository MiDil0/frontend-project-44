const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomIndex = (data) => Math.floor(Math.random() * data.length);

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const getProgression = (fn, start, length) => {
  const arrayForProgression = new Array(length).fill(0);
  return arrayForProgression.map((element, index) => fn(start + index));
};
export { getRandomNumber, getRandomIndex };
