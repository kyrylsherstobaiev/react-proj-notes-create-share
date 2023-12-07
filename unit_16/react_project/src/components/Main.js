import {Link} from "react-router-dom";

function Main() {
    return (
        <div className={'main_tab'}>
            <div className={'main_tab--text'}>
                <h5>Choose an action:</h5>
                <p>You can create a note and send to a friend. Or you can receive the friend's note hash and find it at
                    the storage.</p>
            </div>
            <div className={'main_tab--links'}>
                <div className='main_tab-create'>
                    <Link to='/create'
                          className="btn btn-primary btn-md active"
                          role="button"
                          aria-pressed="true">
                        Create note</Link>
                </div>
                <div>
                    <Link to='/note'
                          className="btn btn-primary btn-md active"
                          role="button"
                          aria-pressed="true"> Find note</Link>
                </div>
            </div>


        </div>
    );
}

export default Main;