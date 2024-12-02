const file = Bun.file("aoc-2-list.txt");
const text = await file.text();

const reports = text
  .split("\n")
  .map((levels) => levels.split(" ").map((v) => +v))
  .filter((v) => v.length > 1);

const safeCount = reports.reduce((acc, report) => {
  if (isSafe(report)) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(safeCount);

function isSafe(level: number[]): boolean {
  let direction: "increasing" | "decreasing" =
    level[1] > level[0] ? "increasing" : "decreasing";
  for (let i = 1; i < level.length; i++) {
    if (direction === "increasing") {
      if (level[i] < level[i - 1]) return false;
    } else {
      if (level[i] > level[i - 1]) return false;
    }
    const distance = Math.abs(level[i] - level[i - 1]);
    if (distance > 3 || distance < 1) {
      return false;
    }
  }
  return true;
}

const test_cases = [
  [[7, 6, 4, 2, 1], true],
  [[1, 2, 7, 8, 9], false],
  [[9, 7, 6, 2, 1], false],
  [[1, 3, 2, 4, 5], false],
  [[8, 6, 4, 4, 1], false],
  [[1, 3, 6, 7, 9], true],
] satisfies Array<[number[], boolean]>;

// test_cases.forEach((test) => {
//   console.log(`Exepected ${test.at(1)}. Received ${isSafe(test[0])}`);
// });
