const obj = {
    value: 1,
    children: [
        {value: 2, children: [{value: 4},{value: 5}]},
        {value: 3, children: [{value: 6}]}
    ]
}

function* dfs (node) {
    yield node.value;
    if (node.children) {
      for (const child of node.children) {
        yield* dfs(child)
      }
    }
}
for (const val of dfs(obj)) {
  console.log(val);
}