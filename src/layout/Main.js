import './Main.css';
import React from 'react';
import Preloader from '../components/Preloader.js'
import MusicList from '../components/MusicList.js';
import Search from '../components/Search.js';

class Main extends React.Component
{
    state =
    {
        musics: []
    }
    componentDidMount()
    {
        fetch('https://www.theaudiodb.com/api/v1/json/123/search.php?s=metallica')
        .then(response => response.json())
        .then(data => this.setState({musics: data.artists || []}));
    }
    searchMusic = (str) =>
    {
        fetch(`https://www.theaudiodb.com/api/v1/json/123/search.php?s=${str}`)
        .then(response => response.json())
        .then(data => this.setState({musics: data.artists || []}));
    }
    render()
    {
        const {musics} = this.state;
        return(
            <div className='main'>
                <Search searchMusic={this.searchMusic}/>
                {
                    musics && musics.length ? <MusicList musics={musics}/> : <Preloader />
                }
            </div>
        )
    }
}
export default Main;