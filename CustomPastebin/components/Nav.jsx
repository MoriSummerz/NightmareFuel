import Link from 'next/link'
import styles from '../styles/Nav.module.scss'

const NavElement = ({ text, href }) => {
    return (
        <Link href={href} passHref>
            <p
                className={styles.navElement + `
                    ms-5
                    pointer
                    lead
                    my-auto`}
            >{text}</p>
        </Link>
    );
}

export default function Nav(props) {
    return (
        <nav className="nav p-3 border-bottom">
            <Link href="/" passHref>
                <h2 className="pointer">Evoleo</h2>
            </Link>

            <NavElement href="/pastebin" text="Pastebin" />
            
            {/* <div className="ps-5 lead my-auto">
                <Button text="Press me!" />
            </div> */}
        </nav>
    )
}