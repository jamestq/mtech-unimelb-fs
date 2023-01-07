import {google} from "googleapis";

export default async function handler(req, res){
    if(req.method === 'GET'){
        const auth = new google.auth.GoogleAuth({
            credentials:{
                client_email: process.env.CLIENT_EMAIL,
                client_id: process.env.CLIENT_ID,
                private_key: process.env.PRIVATE_KEY
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
        });
        const sheets = google.sheets({version: 'v4', auth});
        const id = 2;
        const range = `Sheet1!A${1}:C${3}`;
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SHEET_ID,
            range,
        })
        res.status(200).json(response.data.values);
    }
}