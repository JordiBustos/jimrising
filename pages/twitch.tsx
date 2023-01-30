import TwitchVideosContainer from "@/components/twitchVideosContainer";

export async function getStaticProps() {
  try {
    const res = await fetch(
      `https://api.twitch.tv/helix/videos?user_id=24534372`,
      {
        method: 'GET',
        headers: {
          'Client-ID': 'w7781ggfwwbzws1q5ja52uiru3suwa',
          'Authorization': 'Bearer nhgbgpagnk7j2x1t8a24328nzytcju',
        },
      }
    )
    const data = await res.json()
    return {
      props: {
        data,
      },
    }
    } catch (e) {
      throw e
    }

}

// @ts-ignore
export default function Twitch( { data } ) {
      return (
        <section className="twitchPage">
            <h2 data-fill="Twitch">Twitch</h2>
            <div className="twitchContainer">
                <TwitchVideosContainer data={data} />
            </div>
        </section>
      )
}