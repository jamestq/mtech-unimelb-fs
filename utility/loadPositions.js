const positions = [
    {
        id: "SO-13DEC22",
        title: "Sponsorship Officer",
        descriptions: [
            "Report to President, Treasurer and Sponsorship Director",
            "Raising capital through sponsorship activities for the club to support events and members",
            "Investigate sponsorship opportunities",
            "Create a sponsorship proposals in line with MTech goals and objectives",
            "Create agreements with sponsors to ensure that sponsorship requirements and agreements are met",
            "Manage relationships with existing and potential sponsors",
            "Maintain up-to-date information regarding sponsor contact (email, mobile number, date of agreement",
            "Be present in MTech events and manage sponsors that may be present",
        ],
        skills: [
            "Communication",
            "Negotiation",
            "Proactive & Confident",
            "Knowledge of potential sponsorship opportunities and consulting businesses is desirable"
        ],
        link: "https://forms.office.com/Pages/ResponsePage.aspx?id=z_NbDvQft0aRdlLFOMIqTdAQ4Mml6lFEjRawxpFquJtUMkkyNDVINzRXRVE0WDNVTUsyU1pRN1gzRSQlQCN0PWcu"
    }
]

export default function loadPositions(){
    return new Promise((resolve, reject) => {
        setTimeout(resolve(positions), Math.random()*1000);
    })
}