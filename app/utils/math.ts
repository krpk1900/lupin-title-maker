type getRandomIntOptions = {
  min: number;
  max: number;
}

export const getRandomInt = ({ min, max }: getRandomIntOptions) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
