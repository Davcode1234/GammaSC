import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Custom404Sec } from "../styles/pages/404.styles";

const NotFound = () => {
  const router = useRouter();
  const [count, setCount] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);

    setInterval(() => {
      setCount((num) => num - 0.5);
    }, 1000);
  }, [router]);

  return (
    <Custom404Sec>
      <Image
        src={"/mariusz.jpg"}
        width={1000}
        height={565}
        alt="mariusz"
      ></Image>
      <div>
        <h1>404</h1>
        <h3>Radze ci wracać koleżko - ta strona nie istnieje ;)</h3>
        <p>
          Zostaniesz przekierowany do <Link href={"/"}>strony głównej</Link> za{" "}
          {count}
        </p>
      </div>
    </Custom404Sec>
  );
};

export default NotFound;
