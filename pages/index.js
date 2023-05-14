import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import layout from "../components/layout.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import {
  FaInstagramSquare,
  FaYoutube,
  FaTwitter,
  FaMailBulk,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p dir="rtl">سلام ! به وبسایت ما خوش اومدید :)</p>
        <p dir="rtl"></p>
      </section>
      <div className={layout.container2}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>بلاگ</h2>
          <ul className={styles.grid}>
            {allPostsData.map(({ id, date, title }) => (
              <Link href={`/posts/${id}`} className={styles.link}>
                <li className={styles.card} key={id}>
                  {title}
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </div>

      <footer className={styles.footer}>
        {" "}
        <section className={utilStyles.headingMd}>
          <p dir="rtl">
            می تونید از طریق راه های زیر با ما در ارتباط باشید :
            <br />
            <br />
            <span dir="ltr">
              <Link href={"https://instagram.com/codingwithenjoy/"}>
                <FaInstagramSquare />
              </Link>{" "}
              <Link href={"https://youtube.com/@codingwithenjoy/"}>
                <FaYoutube />
              </Link>{" "}
              <Link href={"https://twitter.com/codingwithenjoy/"}>
                <FaTwitter />
              </Link>{" "}
              <Link href={"mailto:codingwithenjoy@gmail.com"}>
                <FaMailBulk />
              </Link>{" "}
              <Link href={"https://linkedin.com/in/amirmasoudabedi"}>
                <FaLinkedinIn />
              </Link>{" "}
              <Link href={"https://github.com/CodingWithEnjoy/"}>
                <FaGithub />
              </Link>{" "}
              <Link href={"https://github.com/CodingWithEnjoy/"}>
                <FaDiscord />
              </Link>
            </span>
          </p>
        </section>
      </footer>
    </Layout>
  );
}