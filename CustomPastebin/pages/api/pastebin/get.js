import * as fs from 'fs';


export default function handler(req, res) {
    const json = fs.readFileSync('public/pastebin.json').toString();
    res.status(200).json(json);
}
