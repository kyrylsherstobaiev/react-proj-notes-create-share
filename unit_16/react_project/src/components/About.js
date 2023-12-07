function About() {
    return (
        <div className={'about_article'}>
            <h2>About</h2>
            <div className="dropdown-divider"></div>
            <p className={'about_text'}>Hello! My name is Kyryl. I present a react project which works with text notes.
                We use an ordinary db which contains and keeps the notes and we have a small backend part app (node.js)
                which response for requests from frontend and connect with db. We can create and find the note by the
                hash which could displayed the choosing note. You can share the created note with your friend and he can
                find the note by the hash. The note will be disappeared during 15 minutes.
            </p>
        </div>
    );
}

export default About;