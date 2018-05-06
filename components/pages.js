import Link from 'next/link';

const Menu = ({ href, label }) => (
  <span>
    <Link href={href}>
      <a>{label}</a>
    </Link>
  </span>
);

export default ({ children }) => (
  <main>
    <nav>
      <Menu href={'/'} label={'＾'} />
      {['news', 'newest', 'ask', 'jobs'].map(m => (
        <Menu key={m} href={`/${m}`} label={m.toUpperCase()} />
      ))}
    </nav>
    <div> {children} </div>
    <style global jsx>
      {`
        body {
          font-family: Helvetica, sans-serif;
        }
        nav {
          text-align: left;
          background-color: #000;
          color: #fff;
        }
      `}
    </style>
  </main>
);
