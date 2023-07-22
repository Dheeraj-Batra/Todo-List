import React,{useState} from 'react'

export default function AddNote({handleAddNote}) {
    const [noteText, setnoteText] = useState('');
    const characterLimit=200;
    const handlechange=(event)=>{
        if(characterLimit-event.target.value.length>=0) setnoteText(event.target.value);
    }

    const handleSaveClick=()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setnoteText('');
        }
    }
  return (
    <div className='note new'>
        <textarea cols="10" rows="8" placeholder='Type to add a note' onChange={handlechange} value={noteText}></textarea>
        <div className="note-footer">
            <small>{characterLimit-noteText.length} remaining</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}
