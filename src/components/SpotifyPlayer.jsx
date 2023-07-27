/**
* Playlist component
*/
export const SpotifyPlayer = ({song, setFavorite}) => {
    const { id, url, favorite } = song;
    const urlSong = "https://open.spotify.com/embed/album/" + url;
    const favoriteSong = favorite;
    const newFavorite = () => setFavorite(id);
    /**
    * Render que se ejecuta si el album es favorito
    */
    if (favoriteSong) {
        return (
            <div className="d-flex my-5" width="1000px">
                <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" title="Albun"></iframe>
                <button onClick={newFavorite} className="btn">
                    <i class="bi bi-star-fill"></i>
                </button>
            </div>
        )
    }
    /**
    * Render que se ejecuta si el album no es favorito
    */
    else {
        return (
            <div className="d-flex my-5" width="1000px">
                <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" title="Albun"></iframe>
                <button onClick={newFavorite} className="btn">
                    <i className="bi bi-star"></i>
                </button>
            </div>
        )
    }
}