import Link  from "next/link"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link title="Ir a la página Acerca de" href="/acerca">Acerca de</Link>
                <Link title="Ir a la página Twitch" href="/twitch">Twitch</Link>
                <Link href="/create">Text-2</Link>
                <Link href="/create">Text-3</Link>
            </div>
        </div>
    );
}

export default Navbar