import { useEffect, useState } from 'react'

const Pastebin = () => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        let interval = setInterval(() => {
            fetch('/api/pastebin/get').then((value) => value.json()).then((msgs) => {
                setMessages(msgs);
            });
        }, 200);


        return () => {
            clearInterval(interval);
        }
    }, [setMessages]);

    return (
        <div>
            <div>
                {messages.map((msg, key) => (
                    <div key={key}>
                        <p style={{whiteSpace: "pre-wrap"}}>{msg}</p>
                        <hr />
                    </div>
                ))}
            </div>
            <div>
                <textarea id="in" style={{width: '1000px', height: '400px'}} onChange={(ev) => { setText(ev.target.value); }} value={text}></textarea>
                <button
                    className="btn btn-primary text-white"
                    onClick={() => {
                        fetch('/api/pastebin/post?text=' + encodeURIComponent(text));
                        setText('');
                    }}
                >
                    Post
                </button>
            </div>
        </div>
    )
}

export default Pastebin;