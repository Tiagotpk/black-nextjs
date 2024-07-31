import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";

interface ApiResponse {
  name: string;
  timestamp: Date;
}

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json());
  return {
    props: {
      staticData,
    },
  };
};

const Static: NextPage = (props: {
  children?: ReactNode;
  staticData?: ApiResponse;
}) => {
  const [clientSideData, setClientSideData] = useState<ApiResponse>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("/api/hello").then((res) => res.json());
    console.log("Client Side Data:", data);
    setClientSideData(data);
  };

  return (
    <div className="text-center">
      <main>
        <h1 className="my-5 text-4xl font-bold">
          Como funcionam as renderizações do Next.js
        </h1>
      </main>

      <div className="grid grid-cols-2 text-2xl font-semibold">
        <div>
          <h3>Gerado estaticamente durante o build:</h3>
          <h2>{props.staticData?.timestamp.toString()} </h2>
        </div>

        <div>
          <h3>Gerado no cliente:</h3>
          <h2>{clientSideData?.timestamp.toString()}</h2>
        </div>
      </div>
    </div>
  );
};

export default Static;
