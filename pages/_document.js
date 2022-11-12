import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='dark'>
      <Head />
      <body className='bg-zinc-200 dark:bg-zinc-700'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
