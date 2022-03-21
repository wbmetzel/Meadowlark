const fortuneArr = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what you do not know",
  "You will have a pleasant surprise",
  "Whenever possible, keep it simple",
];

const getFortune = () => {
  let index = Math.floor(Math.random() * fortuneArr.length);
  return fortuneArr[index];
};

exports.getFortune = getFortune;
