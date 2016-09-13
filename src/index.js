import {CellAutArray, DOMRender} from "cellaut";
import {_18 as Rule18} from "cellaut.rules";
import domready from "domready";

const row_count = 1000;
const row_length = 500;
const arr = CellAutArray(Rule18, row_length);
arr.generate(row_count);

domready(() => {
  /*eslint-disable no-undef*/
  const container = document.getElementById("cellaut");
  const render = DOMRender(document, container);
  /*eslint-enable no-undef*/
  render(arr, 50);
});
