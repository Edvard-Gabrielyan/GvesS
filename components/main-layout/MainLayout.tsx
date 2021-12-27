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
                <meta name="description" content="Free Web tutorials" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="Edvard Gabrielyan" />
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