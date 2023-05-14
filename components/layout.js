import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import layout from "./layout.module.css";
import Link from "next/link";

const name = "برنامه نویسی با لذت";
export const siteTitle = "برنامه نویسی با لذت | Coding With Enjoy";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/profile.jpg" />
        <meta name="description" content="برنامه نویسی رو با لذت یاد بگیرید" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={124}
              width={124}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      <div className={layout.container2}>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← برگشت</Link>
          </div>
        )}
      </div>
    </div>
  );
}
