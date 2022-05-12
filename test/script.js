//declaration
function afterNYears(names, n) {
  for (const props in names) {
    names[props] += Math.abs(n);
  }
  return names;
}

//apple
console.log(
  afterNYears(
    {
      Joel: 32,
      Fred: 44,
      Reginald: 65,
      Susan: 33,
      Julian: 13,
    },
    1
  )
);

var root = document.getElementById("root").style.backgroundColor("red");
