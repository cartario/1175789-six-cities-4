// import moment from "moment";


// export const getDateFormat = (date) => {
//   if (date) {
//     return moment(date).format(`MMMM D, YYYY`);
//   }
//   return null;
// };

export const extend = (oldData, newData) => {
  return Object.assign({}, oldData, newData);
};

// export const getUniqGenres = (films) => {

//   const ALL_GENRE = `All genres`;

//   const genresList = films
//   .map((film)=>film.genre)
//   .concat(ALL_GENRE)
//   .reverse();

//   return [...new Set(genresList)];
// };



export const getRatingProcent = (rate) => {

  switch (true) {
    case rate >= 0 && rate < 1:
      return 0;
    case rate >= 1 && rate < 2:
      return 20;
    case rate >= 2 && rate < 3:
      return 40;
    case rate >= 3 && rate < 4:
      return 60;
    case rate >= 4 && rate < 5:
      return 80;
    case rate >= 5:
        return 100;    
    default:
      return 0;
  }
};

// const getFormatLessTen = (time) => {
//   return time < 10 ? `0${time}` : `${time}`;
// };

// export const getTimeElapsed = (duration, currentTime) => {
//   const timeDiff = duration - currentTime;
//   const seconds = getFormatLessTen((timeDiff) % 60);
//   const minutes = getFormatLessTen(Math.trunc(timeDiff / 60));
//   const hours = getFormatLessTen(Math.trunc(minutes / 60));
//   return `${hours}:${minutes}:${seconds}`;
// };

// export const getPosition = (currentTime, duration) => {
//   if (duration === 0) {
//     return 0;
//   }
//   return currentTime / duration * 100;
// };
