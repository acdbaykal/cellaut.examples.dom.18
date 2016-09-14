import {CellAutArray, DOMRender, RuleMap} from "cellaut";
import domready from "domready";

const row_count = 1000;
const row_length = 500;
const rule_18 = RuleMap(18);
const arr = CellAutArray(rule_18, row_length);
arr.generate(row_count);

domready(() => {
  /*eslint-disable no-undef*/
  const container = document.getElementById("cellaut");
  const render = DOMRender(document, container);
  /*eslint-enable no-undef*/
  render(arr, 50);
});
