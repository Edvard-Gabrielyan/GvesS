import Link from "next/link";

const HeaderMenu = () => {
    return (
        <>
            <Link href={'/'}>
                <a className="head-title">Home</a>
            </Link>
            <Link href={'/about'}>
                <a className="head-title">About</a>
            </Link>
            <Link href={'/application'}>
                <a className="head-title">Application</a>
            </Link>
            <Link href={'/learning'}>
                <a className="head-title">Learning</a>
            </Link>
            <Link href={'/product'}>
                <a className="head-title">Product</a>
            </Link>
            <Link href={'/support'}>
                <a className="head-title">Support</a>
            </Link>
        </>
    );
};

export default HeaderMenu;