import React, {useEffect, useState} from 'react';
import { v1 as uuid } from 'uuid';
import SongForm from './NewSongForm';
const SongList = () => {
    const [songs, setSongs] = useState([{title: "Ban ja meri rani", id: 1},{title: "Nach meri rani", id: 2},{title: "rani", id: 3}])
    const [count, setCount] = useState(20);

    // call always when evr render or rerender component
    // useEffect(()=> console.log(songs));

    // call only when sons data change
useEffect(()=> console.log(songs), [songs]);
useEffect(()=> console.log(count), [count])

    const addSong = (title) => {
        setSongs([...songs, {title: title, id: uuid()}])
    }
    return ( <div className="song-list">
        <ul>
            {songs.map(song => {
                return (<li id={song.id}>{song.title}</li>)
            })}
        </ul>
        <SongForm addSong={addSong} />

        <button onClick={() => setCount(count+1)}>Add Count {count}</button>
    </div> );
}
 
export default SongList;