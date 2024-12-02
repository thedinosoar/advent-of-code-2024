import { BinaryList } from "../utils.ts";

// ? Part 1
const input = Deno.readTextFileSync("src/day01/input.txt").split("\n");
const leftList = new BinaryList();
const leftListNumberCount = new Map<number, number>();
const rightList = new BinaryList();
const rightListNumberCount = new Map<number, number>();

for (let i = 0; i < input.length; i++) {
  const [left, right] = input[i].split("   ");
  leftList.insert(parseInt(left));
  rightList.insert(parseInt(right));
  const leftCount = leftListNumberCount.get(parseInt(left)) ?? 0;
  leftListNumberCount.set(parseInt(left), leftCount + 1);
  const rightCount = rightListNumberCount.get(parseInt(right)) ?? 0;
  rightListNumberCount.set(parseInt(right), rightCount + 1);
}

const sums: number[] = [];

for (let i = 0; i < leftList.length; i++) {
  sums.push(Math.abs(leftList.getList()[i] - rightList.getList()[i]));
}
console.log(`Answer 1: ${sums.reduce((acc, curr) => acc + curr, 0)}`); // 2769675

// ? Part 2
const similarityMap = new Map<number, number>();
for (const key of leftListNumberCount.keys()) {
  const similarityValue = key * (rightListNumberCount.get(key) ?? 0);
  similarityMap.set(key, similarityValue);
}
console.log(
  `Answer 2: ${similarityMap.values().reduce((acc, curr) => acc + curr, 0)}` // 24643097
);

Deno.exit();
