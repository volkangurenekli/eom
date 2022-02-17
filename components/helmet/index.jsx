import Head from "next/head";

const Helmet = ({ title, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content="employee of the month, eom, vote box" />
      <meta name="author" content="Volkan Gürenekli" />
      <title>{title}</title>
    </Head>
  );
};

export default Helmet;
