const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  };
  

export const dummyData = [
    {
        id:1,
        picture:  `https://picsum.photos/id/${getRandomNumber(
            1,
            98
          )}/300/300` ,
        content: `오랜만의 외출`

    },
    {
        id:2,
        picture:  `https://picsum.photos/id/${getRandomNumber(
            1,
            98
          )}/300/300` ,
        content: `상쾌함`

    },
    {
        id:3,
        picture:  `https://picsum.photos/id/${getRandomNumber(
            1,
            98
          )}/300/300` ,
        content: `ㅎㅎㅎㅎ`

    }
]