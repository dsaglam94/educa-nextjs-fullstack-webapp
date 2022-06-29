import Head from "next/head";

const Meta = ({ title }) => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="education, web development, courses, lessons"
        />
        <meta
          name="description"
          content="Making the learning online fun and reachable for everyone"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
      </Head>
    </div>
  );
};

export default Meta;
