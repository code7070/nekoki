import Head from "next/head";

interface PageHead {
  title?: string;
  description?: string;
  icon?: string;
}

export default function PageHead({
  title = "Create Next App",
  description = "Generated by create next app",
  icon = "/favicon.ico",
}: PageHead) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={icon} />
    </Head>
  );
}
