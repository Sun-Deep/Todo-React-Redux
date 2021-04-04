function generateTime(): string {
  let time: string = `${new Date()
    .getHours()
    .toString()} : ${new Date().getMinutes().toString()}`;

  return time;
}

export default generateTime;
