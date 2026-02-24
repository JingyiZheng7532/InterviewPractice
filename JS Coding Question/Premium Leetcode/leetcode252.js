const able = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    let [lastStart, lastEnd] = intervals[i - 1];
    let [currStart, currEnd] = intervals[i];
    if (lastEnd > currStart) {
      return false;
    }
  }

  return true;
};
