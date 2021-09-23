import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

const Layout = ({ children, title = 'Crypto tracker' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='header'>
        <Link href='/' passHref>
          <a>
          
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;