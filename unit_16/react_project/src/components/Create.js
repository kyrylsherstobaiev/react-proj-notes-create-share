import {useEffect, useState} from "react";
import env from '../env.json'

function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');
    const [alert, setAlert] = useState('hide');
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        isFocused && setAlert('hide');
    }, [isFocused]);

    const sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackEnd, {
            method: 'POST',
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.result) {
                    setUrl(`${env.url}/${res.url}`);
                }
            })
    }

    const loadDataFromForm = (e) => {
        e.preventDefault();
        let note = e.target.elements.note.value.trim();
        if (note === '') {
            setAlert('');
            return false;
        }
        sendData({'note': note});
    }


    return (
        <div className={'create_tab'}>
            <form onSubmit={loadDataFromForm} className={`${formClass} form_style`}>
                <div className="form-group">
                    <label htmlFor="note">Create note:</label>
                    <textarea className="form-control"
                        name="note"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        id="note"
                        placeholder='Write text'>
                </textarea>
                    <button type='submit' className="btn btn-primary">Create</button>
                </div>
            </form>
            <div className={`alert alert-danger ${alert}`} role="alert">
                Something went wrong! Please fill a textarea!
            </div>
            <div className={lineClass}>
                <div className='text-secondary got_link create_link'>{url}</div>
                <div>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn btn-primary">
                        Create a new note:
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Create;