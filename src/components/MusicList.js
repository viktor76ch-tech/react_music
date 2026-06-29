import './MusicList.css';
import Music from './Music.js';

function MusicList(props)
{
     const {musics =[]} = props;
     return(
        <div className='musics'>
            {
                musics.map
                (
                    music =>
                    {
                        return <Music key={musics.idArtist} {...music}/>
                    }
                )
            }
        </div>
     )
}
export default MusicList;