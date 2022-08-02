const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

export const dummyData = [
  {
    id: 0,
    date: "2022-02-24",
    content: [
      {
        date_id: 0,
        picture: `https://picsum.photos/id/${getRandomNumber(1, 98)}/300/300`,
        text: "인상적",
      },
      {
        date_id: 1,
        picture: `https://picsum.photos/id/${getRandomNumber(1, 98)}/300/300`,
        text: `하하`,
      },
      {
        date_id: 2,
        picture: `https://picsum.photos/id/${getRandomNumber(1, 98)}/300/300`,
        text: `추억`,
      },
    ],
  },
  {
    id: 1,
    date: "2022-04-12",
    content: [
      {
        date_id: 0,
        picture: `https://picsum.photos/id/${getRandomNumber(1, 98)}/300/300`,
        text: "상쾌함",
      },
    ],
  },
  {
    id: 2,
    date: "2022-07-01",
    content: [
      {
        date_id: 0,
        picture: `https://picsum.photos/id/${getRandomNumber(1, 98)}/300/300`,
        text: "ㅎㅎㅎㅎ",
      },
      {
        date_id: 1,
        picture: `https://picsum.photos/id/${getRandomNumber(1, 98)}/300/300`,
        text: "운이 좋았다",
      },
    ],
  },
];
