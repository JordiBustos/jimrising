import Image from "next/image";

const Sponsors = () => {
  return (
    <section className="sponsors">
      <h2 data-fill="Sponsors">Sponsors</h2>
      <div className="sponsorsContainer">
        <Image
          src="/sponsors/kaspersky.png"
          width={300}
          height={200}
          alt="Sponsor 1"
        />
        <Image
          src="/sponsors/dominance.jpg"
          width={400}
          height={200}
          alt="Sponsor 1"
        />
        <a
          rel="noreferrer"
          href="https://www.amazon.com.mx/?&linkCode=sl2&tag=jimrising07-20&linkId=f1f00692284a7a551127f7505bfac145&language=es_MX&ref_=as_li_ss_tl"
          target="_blank"
        >
          <Image
            src="/sponsors/amazon.png"
            width={300}
            height={200}
            alt="Sponsor 1"
          />
        </a>
        <a
          rel="noreferrer"
          href="https://merch.streamelements.com/jimrsng"
          target="_blank"
        >
          <Image
            src="/sponsors/shop.png"
            width={300}
            height={200}
            alt="Sponsor 1"
          />
        </a>
      </div>
    </section>
  );
};

export default Sponsors;
