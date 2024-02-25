type playSoundOptions = {
  filename: string;
  volume?: number;
}

export const playSound = ({ filename, volume = 1 }: playSoundOptions) => {
  const audio = new Audio();
  audio.src = filename;
  audio.volume = volume;
  audio.play();
}
