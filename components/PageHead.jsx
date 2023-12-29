import Head from 'next/head'

const PageHead = ({ title, description }) => {

    return(
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/Gibraltar-solid.svg" />
      </Head>
    );
}

export default PageHead;