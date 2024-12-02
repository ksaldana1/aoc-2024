const file = Bun.file("aoc-1-list.txt");
const text = await file.text();

const lines = text.split("\n");
const pairs = lines.map((text) => text.split("   "));

const left = pairs.map((pair) => parseInt(pair.at(0)!)).sort((a, b) => a - b);
const right = pairs.map((pair) => parseInt(pair.at(1)!)).sort((a, b) => a - b);

const distance = left.reduce((acc, _curr, index) => {
  const dis = Math.abs(left[index] - right[index]);
  if (isNaN(dis)) return acc;
  return acc + dis;
}, 0);

console.log(distance);
