import Image from "next/image";
import { Custom404Sec } from "../styles/pages/404.styles";

const fdPage = () => {
  return (
    <Custom404Sec>
      <Image
        src={"/mariusz.png"}
        width={1000}
        height={565}
        alt="mariusz"
      ></Image>
    </Custom404Sec>
  );
};

export default fdPage;
