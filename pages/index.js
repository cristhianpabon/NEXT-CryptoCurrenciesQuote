import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Header from "@/components/Header";
import CryptoForm from "@/components/CryptoForm";
import CryptoData from "@/components/CryptoData";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedData, setSelectedData] = useState({});
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(selectedData).length > 0) {
      const cotizarCripto = async () => {
        setLoading(true);
        setResponse({});

        const { currency, cryptoCurrency } = selectedData;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;

        const fetchResponse = await fetch(url);
        const data = await fetchResponse.json();

        setResponse(data.DISPLAY[cryptoCurrency][currency]);

        setLoading(false);
      };

      cotizarCripto();
    }
  }, [selectedData]);

  return (
    <>
      <Head>
        <title>Cryptocurrencies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cristhianpabon.github.io/NEXT-CryptoCurrenciesQuote/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className={styles.content}>
          <CryptoForm setSelectedData={setSelectedData} />
          <div className={styles.formImage}>
            <Image
              src="https://cristhianpabon.github.io/NEXT-CryptoCurrenciesQuote/img/cryptomeasures.png"
              alt="Bitcoin small logo image"
              // width={520}
              // height={410}
              width={390}
              height={307}
              priority
            />
          </div>
        </div>

        {/* {loading && <p>Cargando..</p>} */}
        {response.PRICE && <CryptoData data={resultado} />}
      </main>
      <Footer />
    </>
  );
}
