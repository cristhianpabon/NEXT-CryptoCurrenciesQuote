import { useEffect, useState } from "react";
import styles from "@/styles/CryptoForm.module.css";
import FormSelect from "./FormSelect";
import { currencies } from "@/constants/currencies";

const CryptoForm = ({ setSelectedData }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [currency, selectCurrency] = useState("");
  const [cryptoCurrency, selectCryptoCurrency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([currency, cryptoCurrency].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    setSelectedData({
      currency,
      cryptoCurrency,
    });
  };
  
  useEffect(() => {
    const getCurrentCryptos = async () => {
    const response = await fetch(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
    );
    const responseJson = await response.json();
    const arrayCryptoOptions = responseJson.Data.map((cryptoData) => {
      const crypto = {
        id: cryptoData.CoinInfo.Name,
        name: cryptoData.CoinInfo.FullName,
      };
      return crypto;
    });

      setCriptos(arrayCryptoOptions);
    };
    getCurrentCryptos();
  }, []);

  return (
    <div className={styles.cryptoForm}>
      <h2>Available cryptocurrencies prices</h2>
      <div>
        {error && (
          <p className={styles.error}>*All the fields are required</p>
        )}
        <form onSubmit={handleSubmit}>
          <FormSelect
            label={"Select your currency"}
            options={currencies}
            value={currency}
            setValue={selectCurrency}
          />
          <FormSelect
            label={"Select your Crypto"}
            options={criptos}
            value={cryptoCurrency}
            setValue={selectCryptoCurrency}
          />
          <input className={styles.inputSubmit} type="submit" value="Get Crypto Price" />
        </form>
      </div>
    </div>
  );
};

export default CryptoForm;

// export async function getStaticProps() {
//   console.log("criptos2:", arrayCriptos);
//   try {
//     const respuesta = await fetch(
//       "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
//     );
//     const resultado = await respuesta.json();
//     console.log("resultado:", resultado);
//     const arrayCriptos = resultado.Data.map((cripto) => {
//       const objeto = {
//         id: cripto.CoinInfo.Name,
//         name: cripto.CoinInfo.FullName,
//       };
//       return objeto;
//     });

//     console.log("criptos2:", arrayCriptos);
//     return {
//       props: {
//         arrayCriptos,
//         data: true,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
