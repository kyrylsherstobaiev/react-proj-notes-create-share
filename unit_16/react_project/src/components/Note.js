// http://localhost:3000/note/gqbv4iuwr5lgl9cuasy2ktzc

import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import env from "../env.json";

function Note() {

    let {noteURL} = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackEnd, {
                method: 'POST',
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: JSON.stringify({"url": noteURL})
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    if (res.result) {
                        setNoteText(res.note);
                        setLineClass('');
                        setFormClass('hide');
                    } else if (!res.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        } else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, [noteURL]);

    const getNote = (e) => {
        e.preventDefault();
        let url = e.target.elements.url.value.trim();
        if (url === '') {
            setFormClass('hide');
            setErrorClass('');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + `/` + url;
    }

    const searchNote = () => {
        window.location.href = env.url;
    }

    const backToTheFindingPage = () => {
        setErrorClass('hide');
        setFormClass('');
    }

    return (
        <div className={'note_tab'}>
            <div className={lineClass}>
                <h5>Note: <span>{noteText}</span></h5>
                <div>
                    <button
                        onClick={searchNote}
                        className="btn btn-primary line_button">
                        Find one more note
                    </button>
                </div>
            </div>
            <div className={errorClass}>
                <div className={`alert alert-danger`} role="alert">
                    Something went wrong! Please enter valid hash!
                </div>
                <button className={`btn btn-primary`} onClick={backToTheFindingPage}>Back to finding page</button>
            </div>
            <div className={formClass}>
                <form onSubmit={getNote}>
                    <label htmlFor="url">Insert hash note:</label>
                    <input type="text" name='url' id='url' className='form-control'/>
                    <button type='submit' className='btn btn-primary note_btn'>Find note</button>
                </form>
            </div>
        </div>
    );
}

export default Note;