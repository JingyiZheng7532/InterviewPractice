//LeetCode 694. 不同岛屿的数量 (Number of Distinct Islands)。

// 给定一个非空数组 grid，它是由 0 和 1 组成的矩阵。一个 岛屿 指的是一组相邻的 1（这里的相邻是指四个方向：上、下、左、右）。
// 我们认为两个岛屿是 相同 的，如果一个岛屿可以通过 平移（不能旋转或翻转）与另一个岛屿完全重合。
// 你的目标是计算这个矩阵中 不同岛屿的数量。

//dfs
// time complexity: O(M*N);
// space complexity: O(M*N);

const numberOfIsland = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [
    [-1, 0, "u"],
    [1, 0, "d"],
    [0, -1, "l"],
    [0, 1, "r"],
  ];

  const islandSet = new Set();

  const dfs = function (x, y, path) {
    grid[x][y] = 0;
    for (let [dx, dy, dirChar] of directions) {
      let newX = x + dx;
      let newY = y + dy;
      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        grid[newX][newY] === 1
      ) {
        path.push(dirChar);
        dfs(newX, newY, path);
        path.push("b");
      }
    }
    return;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        let path = [];
        dfs(i, j, path);
        islandSet.add(path.join(""));
      }
    }
  }
  return islandSet.size;
};
