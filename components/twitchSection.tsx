import Link from "next/link"

const Twitch = () => { 
    return (
        <section className="twitchSection">
            <Link href="/twitch"><h2 data-fill="Twitch">Twitch</h2></Link>
            <div className="twitchContainer">
                <iframe
                    src="https://player.twitch.tv/?channel=jimrsng&parent=localhost"
                    height="100%"
                    width="100%"
                    allowFullScreen={true}
                ></iframe>
            </div>
        </section>
    )
}

export default Twitch