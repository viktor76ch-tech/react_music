import './Main.css';
import React from 'react';
import MusicList from '../components/MusicList.js';

class Main extends React.Component
{
    state =
    {
        musics: []
    }
    render()
    {
        const {musics} = this.state;
        return(
            <div className='main'>
                {
                    musics.length ? <MusicList musics={musics}/> : <h3>Loading...</h3>
                }
            </div>
        )
    }
}
export default Main;