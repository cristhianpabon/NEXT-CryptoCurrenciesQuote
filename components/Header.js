import styles from "@/styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.headerContent}>
      <nav className={styles.navbar}>
        <Image
          className={styles.logo}
          src="/img/bitcoin.png"
          alt="Bitcoin small logo image"
          width={64}
          height={64}
          priority
        />
        <h1>Cryptocurrency</h1>
      </nav>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h2>Get all the current prices from the market instantly</h2>
          <p>Facilisis lacus nec ut sed sapien</p>
          <a>Start Now</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
