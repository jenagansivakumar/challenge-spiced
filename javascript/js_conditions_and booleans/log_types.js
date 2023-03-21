// logType.js

let data;
data = "%$£@";
let whatisData;
switch (true) {
  case data === null:
    whatisData = "null!";
    break;
  case typeof data == "number":
    whatisData = "number!";
    break;
  case "number":
    console.log("number!");
    break;
  case "NaN":
    console.log("Not a number!");
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "bigint":
    console.log("bigint!");
    break;
  case "function":
    console.log("function!");
    break;
  case "object":
    console.log("object!");
    break;
  case "array":
    console.log("array!");
    break;
  default:
    console.log("I have no idea!");
    break;
}

// {
//   case "undefined":
//     console.log("undefined!");
//     break;
//   case "null":
//     if (data === null) {
//       console.log("null!");
//       break;
//     }

console.log(whatisData);
