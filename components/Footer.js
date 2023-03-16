import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import bitcoinImage from "../public/img/bitcoin.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Image
          src={bitcoinImage}
          alt="Bitcoin small logo image"
          width={46}
          height={46}
          priority
        />
        <h1>Cryptocurrency</h1>
      </div>
      <div className={styles.right}>
        <p className={styles.footerDate}>@ 2023 Criptocurrency Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
