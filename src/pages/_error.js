import { NextSeo } from 'next-seo';

function Custom404({ statusCode }) {
    return (
      <>
        <NextSeo title="Página no encontrada" />
        <h1>Error {statusCode}</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
      </>
    );
  }
  
  export default Custom404;