import Head from "next/head";
import { AmpIncludeAmpSocialShare } from "./amp";

export const config = {
  amp: true,
};

export function Layout(props: {
  title: string;
  author: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{props.title} </title>
        <AmpIncludeAmpSocialShare />
      </Head>
      <main className="markdown-body">
        <h1>{props.title}</h1>
        <p>by {props.author}</p>
        {props.children}
      </main>
      <div>
        <TwitterShare />
        <FacebookShare />
        <LineShare />
      </div>
      <hr />
      <footer style={{ paddingBottom: 20 }}>
        created by <a href="https://github.com/mizchi/mdxx">@mizchi/mdxx-ssg</a>
      </footer>
    </>
  );
}

function TwitterShare() {
  // @ts-ignore
  return <amp-social-share type="twitter"></amp-social-share>;
}

function FacebookShare() {
  // @ts-ignore
  return <amp-social-share type="facebook"></amp-social-share>;
}

function LineShare() {
  // @ts-ignore
  return <amp-social-share type="line"></amp-social-share>;
}