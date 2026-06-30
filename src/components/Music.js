import './Music.css';

function Music(props)
{
    const {strArtist, intFormedYear, idArtist, strStyle, strArtistBanner, strArtistThumb} = props;
    return(
        <div className='card'>
            <div className="banner-wrapper">
                <img src={strArtistBanner} alt={idArtist} title={idArtist}/>
            </div>
            <div className="avatar-wrapper">
                <img src={strArtistThumb} alt={idArtist} title={idArtist}/>
            </div>
            <div className='card-info'>
                <h3>{strArtist}</h3>
                <p>{intFormedYear} {strStyle}</p>
            </div>
        </div>
    );
}
export default Music;