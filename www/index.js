import * as wasm from "hello-world-wasm-sort";

/**
NOT DOING ANY KIND OF BENCHMARKING
*/
function runTest(n) {
  nums = Number(n);

  let foo = new Int32Array(nums);
  let foo2 = new Int32Array(nums);

  for (let i = 0; i < nums; i++) {
    let rand = Math.floor(Math.random() * nums);
    foo[i] = rand;
    foo2[i] = rand;
  }

  let start1 = Date.now();
  wasm.bubble_sort(foo);
  let start2 = Date.now();

  let start3 = Date.now();
  wasm.selection_sort(foo2);
  let start4 = Date.now();

  document.getElementById("result").textContent = `Bubble Sort: ${
    start2 - start1
  } ms , Selection Sort: ${start4 - start3} ms`;
}

let btn = document.getElementById("generate");

btn.addEventListener("click", (ev) => {
  let nums = document.getElementById("nums");
  runTest(nums.value);
});
