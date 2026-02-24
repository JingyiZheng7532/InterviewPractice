// [0, 30]
// [5, 10], [15, 20]

const roomCount = function (intervals) {
  if (!intervals || intervals.length === 0) return 0;

  const starts = intervals.map((a) => a[0]).sort((a, b) => a - b);
  const ends = intervals.map((a) => a[1]).sort((a, b) => a - b);

  let count = 0;
  let maxRooms = 0;
  let endPtr = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (starts[i] < ends[endPtr]) {
      count++;
    } else {
      endPtr++;
    }

    maxRooms = Math.max(maxRooms, count);
  }

  return maxRooms;
};
