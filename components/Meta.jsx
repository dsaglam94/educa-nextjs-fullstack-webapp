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
        <title>{title}</title>
      </Head>
    </div>
  );
};

export default Meta;
