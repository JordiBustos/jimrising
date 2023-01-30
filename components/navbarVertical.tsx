import Image from "next/image";
import Link from "next/link";

const NavbarVertical = () => {
  return (
    <nav className="navbarVertical">
      <div className="linksVertical">
        <Link title="Volver a la Home" href="/">
          <Image
            src="/logo.jpg"
            width={100}
            height={100}
            alt="Logo JimRising"
          />
        </Link>
        <div className="donationContainer">
          <a
            href="https://streamelements.com/jimrsng/tip"
            target="_blank"
            rel="noreferrer"
          >
            Donar
          </a>
          <a
            href="https://www.twitch.tv/subs/jimrsng"
            target="_blank"
            rel="noreferrer"
          >
            Suscribirse
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarVertical;
