const TwitchVideosContainer = ({data}) => {
    const urls = []
    const dataReduced = data.data.slice(0, 9) 
    dataReduced.map((video: Object) => {
        let url = `https://player.twitch.tv/?video=v${video.id}&parent=localhost&autoplay=false`
        urls.push(url)
    })
    
    return (
        <section>
            <h3>
                Videos Recientes
            </h3>
            <div className="twitchVideosContainer">
                {dataReduced.map((video, index: number) => (
                    <div className="twitchVideo" key={video.id}>
                        <iframe
                            src={urls[index]}
                            height="500"
                            width="500"
                        >
                        </iframe>
                </div>
                ))}
            </div>
        </section>
    )
}

export default TwitchVideosContainer