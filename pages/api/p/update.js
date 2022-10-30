import { getToken } from 'next-auth/jwt';
const {google} = require('googleapis');

const [secret,clientId,clientSecret,apiKey] = [
    process.env.SECRET, process.env.GOOGLE_CLIENT_ID, 
    process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_APIKEY
];

export default async (req, res) => {
    const token = await getToken({ req, secret });
    let {access_token,id_token, refresh_token} = {...token};
    
    const auth = new google.auth.OAuth2(clientId, clientSecret);
    auth.setCredentials({refresh_token : refresh_token});
   
    const calendar = google.calendar({version: 'v3', auth});

    const {projectID, title, description, location} = req.query;
    const cal_res = await calendar.calendars.patch({
        calendarId: projectID,
        requestBody: {
            "description": description,
            "location": location,
            "summary": title,
        },
    });

    if(cal_res.data)
        res.status(200).send("success");
    else res.status(505).send("error");
};