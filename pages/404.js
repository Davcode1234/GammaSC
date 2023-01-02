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

      <h1>Radze ci wracać koleżko - ta strona nie istnieje ;)</h1>
    </Custom404Sec>
  );
};

export default fdPage;
