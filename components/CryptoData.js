import Image from "next/image";
import styles from "@/styles/CryptoData.module.css";

const CryptoData = ({ data }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    data;
  return (
    <div className={styles.criptoData}>
      <div className={styles.data}>
        <div  className={styles.criptocoin}>
          <Image
            src={`https://cryptocompare.com/${IMAGEURL}`}
            alt="Crypto logo image"
            width={50}
            height={50}
            priority
          />
          <p className={styles.price}>
            Price per unit: <span>{PRICE}</span>
          </p>
        </div>
        <div>
          <p className={styles.content}>
            Higher price of the day: <span>{HIGHDAY}</span>
          </p>
          <p className={styles.content}>
            Lowest price of the day: <span>{LOWDAY}</span>
          </p>
          <p className={styles.content}>
            Variation last 24 hours: <span>{CHANGEPCT24HOUR}</span>
          </p>
          <p className={styles.content}>
            Latest updates: <span>{LASTUPDATE}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoData;
