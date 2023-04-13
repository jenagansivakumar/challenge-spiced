import Image from "./Image";
import logo from "../img/avatar.jpg";

export default function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("i could toggle a profile")}
    >
      <Image src={logo} />
    </button>
  );
}

// <button type="button" onClick={()=> console.log("I could toggle a
// profile")}>
// </button>

//   )}
