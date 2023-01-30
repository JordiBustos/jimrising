import Image from "next/image";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerContainer--title">
        <h1>
          <div>
            <span className="holaSpan">Hola!</span>
            <span className="icon">👋</span>
          </div>
          <div className="nameContainer">
            Soy <span className="spanName">Jim Rising.</span>
          </div>
          <span>
            Me dedico a entretener y dar Cringe con diferentes juegos.
          </span>
        </h1>
        <ul className="socialMedia">
          <li>
            <a
              title="Ir al Twitch de Jim Rising"
              rel="noreferrer"
              href="https://www.twitch.tv/jimrsng"
              target="_blank"
            >
              <Image
                src="/social/twitch.svg"
                width={30}
                height={30}
                alt="Twitch"
              />
            </a>
          </li>
          <li>
            <a
              title="Ir al Twitter de Jim Rising"
              rel="noreferrer"
              href="https://twitter.com/JimRisingSC"
              target="_blank"
            >
              <Image
                src="/social/twitter.svg"
                width={30}
                height={30}
                alt="Twitter"
              />
            </a>
          </li>
          <li>
            <a
              title="Ir al YT de Jim Rising"
              rel="noreferrer"
              href="https://www.youtube.com/@JimRisingTV"
              target="_blank"
            >
              <Image
                src="/social/youtube.svg"
                width={30}
                height={30}
                alt="Youtube"
              />
            </a>
          </li>
          <li>
            <a
              title="Ir al Instagram de Jim Rising"
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/jimrising12/"
            >
              <Image
                src="/social/instagram.svg"
                width={30}
                height={30}
                alt="Instagram"
              />
            </a>
          </li>
          <li>
            <a
              title="Ir al Facebook de Jim Rising"
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/JimRisingSC2"
            >
              <Image
                src="/social/facebook.svg"
                width={30}
                height={30}
                alt="Facebook"
              />
            </a>
          </li>
        </ul>
      </div>

      <Image
        src="/perfil.webp"
        alt="Jim Rising"
        priority
        className="headerContainer--img"
        width={400}
        height={600}
      />
    </div>
  );
};

export default Header;
