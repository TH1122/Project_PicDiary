const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

export const dummyData = [
  {
    id: 1,
    date: "2022-02-24T16:17:47.000Z",
    picture: `https://picsum.photos/id/${getRandomNumber(1, 98)}/300/300`,
    content: `오랜만의 외출`,
  },
  {
    id: 2,
    date: "2022-04-12T08:12:57.000Z",
    picture: `https://picsum.photos/id/${getRandomNumber(1, 98)}/300/300`,
    content: `상쾌함`,
  },
  {
    id: 3,
    date: "2022-07-01T11:52:17.000Z",
    picture: `https://picsum.photos/id/${getRandomNumber(1, 98)}/300/300`,
    content: `ㅎㅎㅎㅎ`,
  },
];
