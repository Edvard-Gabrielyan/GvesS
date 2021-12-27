import Link from "next/link";
import {useRouter} from "next/router";

const HeaderMenu = () => {

  const router = useRouter();

  return (
        <>
            <Link href={'/'}>
                <a className={router.pathname == "/" ? "active head-title" : "head-title"}>
                  Home
                </a>
            </Link>
            <Link href={'/about'}>
                <a className={router.pathname == "/about" ? "active head-title home" : "head-title"}>
                  About
                </a>
            </Link>
            <Link href={'/application'}>
                <a className={router.pathname == "/application" ? "active head-title" : "head-title"}>
                  Application
                </a>
            </Link>
            <Link href={'/learning'}>
                <a className={router.pathname == "/learning" ? "active head-title" : "head-title"}>
                  Learning
                </a>
            </Link>
            <Link href={'/product'}>
                <a className={router.pathname == "/product" ? "active head-title" : "head-title"}>
                  Product
                </a>
            </Link>
            <Link href={'/support'}>
                <a className={router.pathname == "/support" ? "active head-title support" : "head-title"}>
                  Support
                </a>
            </Link>
        </>
    );
};

export default HeaderMenu;