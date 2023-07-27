import { SpotifyPlayer } from "./SpotifyPlayer"
import { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';
/**
* Componente fusion entre Title y Form
*/
export const MyPlaylist = () => {

    const urlRef = useRef();
    const favoriteRef = useRef();
    const [mensaje, setMensaje] = useState('')
    const [playlist, setPlaylist] = useState([{ id: uuid(), url: '33qkK1brpt6t8unIpeM2Oy', favorite: true },
    { id: uuid(), url: '0H6TddUF2M63ZSHGvhk5yy', favorite: true },
    { id: uuid(), url: '3fn4HfVz5dhmE0PG24rh6h', favorite: true },
    { id: uuid(), url: '0DQyTVcDhK9wm0f6RaErWO', favorite: true }]);

    /**
* Funcion flecha para agregar nueva cancion
*/
    const addSong = () => {
        const url = urlRef.current.value;
        const favorite = favoriteRef.current.checked;

        setPlaylist(() => {
            const newSong = {
                id: uuid(),
                url: url,
                favorite: favorite
            };
            const newPlaylist = [...playlist, newSong];
            return newPlaylist;
        });
        if (url.trim() === '') {
            console.log('campos vacios');
            setMensaje(() => 'Campos vacios');
            setTimeout(() => {
                setMensaje(() => '');
            }, 3000);
            return
        }
    }
    const removeSong = () => {
        setPlaylist(() => {
            const newPlaylist = playlist.filter((song) => song.favorite === true);
            return newPlaylist
        })
    }
    const setFavorite = (id) => {
        setPlaylist(() => {

            const newPlaylist = [...playlist];
            const song = newPlaylist.find((song) => song.id === id);

            song.favorite = !(song.favorite);
            return newPlaylist;
        });
    }

    return (
        <div className='container'>
            <h1 className='title text-center mt-5'>My favorite songs</h1>
            <div class="alert alert-danger mt-2" role="alert" hidden={!(mensaje)}>
                {mensaje}
            </div>
            <div className='d-flex align-items-center'>
                <input ref={urlRef} type='text' className='form-control' placeHolder='Ingrese el codigo
    del album aqui...'></input>
                <div className='form-check ms-2'>
                    <input ref={favoriteRef} className='form-check-input' type='checkbox' />
                    <label className='form-check-label'>
                        Favorite
                    </label>
                </div>
                <button onClick={addSong} className='btn btn-success ms-2'><i class="bi bi-plus-circlefill"></i></button>
                <button onClick={removeSong} className='btn btn-danger ms-2'><i class="bi bitrash"></i></button>
            </div>
            <div>
                {
                    playlist.map(song => <SpotifyPlayer song={song} key={song.id} setFavorite={setFavorite} />)
                }
            </div>
        </div>
    )
}