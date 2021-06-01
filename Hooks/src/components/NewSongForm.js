import React, {useState} from 'react';

const SongForm = ({addSong}) => {
 const[newSong, setNewSong] = useState('');
 const handleSubmit = (e) => {
     e.preventDefault();
     addSong(newSong);
     setNewSong('')
 }
    return (<form onSubmit={handleSubmit}>
        <label>Add New Song</label>
        <input type="text" value={newSong} onChange={(e) => setNewSong(e.target.value)}></input>
        <input type="submit" value="Add Song" />
    </form>  );
}
 
export default SongForm;