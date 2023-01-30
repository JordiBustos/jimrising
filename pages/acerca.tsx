import Image from "next/image";

const Acerca = () => {
  return (
    <section className="acercaContainer">
      <h1 data-fill="Acerca de mí">Acerca de mí</h1>
      <div className="mainContainer">
        <div className="textContainer">
            <p>Soy del Puerto de Veracruz.</p>
            <p>
                Fui profesional en Starcraft 2 vivo de lo que gano en el stream con
                suscripciones, bits, Etc.
            </p>
            <p>
                Ahora me dedico a entretener y dar Cringe con diferentes juegos y LOL :D
                Llevo 11 años haciendo stream desde que twitch era antes JustinTV y mi
                meta es tener siempre la mejor actitud y nunca ser Toxico y respetar
                todas las ideologías :)
            </p>

            <h3>Hardware</h3>
            <ul>
                <li>Motherboard: TUF x299 Mark I</li>
                <li>CPU: i7- 7820x OC 4.6</li>
                <li>GPU: GTX 3080TI Zotac Trinity</li>
                <li>Soundcard: Asus Rog Xonar Phoebus</li>
                <li>Memory Ram: 32gb DDR4 3200 mhz</li>
                <li>Case: Corsair Graphite 780t</li>
                <li>PSU: ToughPower Grand RGB 1050W</li>
                <li>Cooler: Corsair h150i pro rGB</li>
                <li>SSD: 256 GBs Hyperx and M.2 128gbs</li>
            </ul>
            
        </div>
        <Image alt="Jim posando" src="/jim.jpg" width={300} height={300} />
      </div>
      
    </section>
  );
};

export default Acerca;
