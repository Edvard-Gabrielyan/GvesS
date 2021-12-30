import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link'
import HeaderMenu from "../header-menu/HeaderMenu";
import {MenuOutlined} from "@ant-design/icons";
import {Dropdown, Menu} from "antd";

export default function MainLayout({children, title = 'GVESS'}: any) {

  const menu = (
    <Menu>
      <HeaderMenu />
    </Menu>
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Edvard Gabrielyan" />
        <meta name="contact" content="gabrielyanedvard@gmail.com" />
        <meta name="copyright" content="Copyright owner?????" />
        <meta name="description" content="Free Web tutorials???????????" />
        <meta name="expires" content="0??????" />
        <meta name="keywords" content="HTML, CSS, JavaScript????????????" />
        <meta name="og:title" property="og:title" content="????" />
        <meta name="robots" content="noindex, nofollow????" />
        {/*<meta name="viewport" content="width=device-width, initial-scale=1.0???????" />*/}
        <title>{title}</title>
      </Head>
      <nav>
        <div className="logo">
          <Link href={'/'}>
            <a>
              <Image
                src="/logo.png"
                alt="Logo"
                height={32}
                width={32}
              />
            </a>
          </Link>
        </div>
        <header>
          <HeaderMenu />
        </header>
        <div className="menu-icon">
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <MenuOutlined />
            </a>
          </Dropdown>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <footer>
        Footer
      </footer>
    </>
  )
}