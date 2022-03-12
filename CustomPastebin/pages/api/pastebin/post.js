import * as fs from 'fs';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default function handler(req, res) {
    const json = fs.readFileSync('public/pastebin.json').toString();
    let messages = JSON.parse(json);

    console.log(req.query.text);
    messages.push(req.query.text);
    fs.writeFileSync('public/pastebin.json', JSON.stringify(messages));

    res.status(200).send('ok');
}
