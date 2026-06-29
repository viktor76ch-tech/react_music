import './Music.css';

function Music(props)
{
    const {strArtist, intFormedYear, idArtist, strStyle, strArtistThumb} = props;
    return(
        <div className='card'>
                <img src={strArtistThumb} alt={idArtist} title={idArtist}/>
                <div>
                    <h3>{strArtist}</h3>
                    <p>{intFormedYear} {strStyle}</p>
                </div>
        </div>
    );
}
export default Music;