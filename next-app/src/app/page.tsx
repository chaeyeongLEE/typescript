import Image from "next/image";
import styles from "./page.module.scss";
import { IconNext } from "../../public/svgs";
import CustomButton from "@/components/CustomButton/CustomButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src={IconNext}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a className={styles.primary} href="/list" rel="noopener noreferrer">
            <Image
              className={styles.logo}
              src="/svgs/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            List
          </a>
          <a
            href="/company"
            rel="noopener noreferrer"
            className={styles.secondary}>
            Company
          </a>
          <span>Test</span>
        </div>
        <CustomButton
          btnType="button"
          title="타이틀영역"
          className="buttonCommon"
        />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/svgs/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/svgs/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/svgs/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
        <a>
          <Image
            aria-hidden
            src="/svgs/github.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
      </footer>
    </div>
  );
}

// page.tsx 안에서 보여줄 컨텐츠들은 containers 폴더에 넣어두고 땡겨 쓰도록 !
