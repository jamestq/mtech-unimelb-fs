const positions = [
    // {
    //     id: "SO-13DEC22",
    //     title: "Sponsorship Officer",
    //     descriptions: [
    //         "Report to President, Treasurer and Sponsorship Director",
    //         "Raising capital through sponsorship activities for the club to support events and members",
    //         "Investigate sponsorship opportunities",
    //         "Create a sponsorship proposals in line with MTech goals and objectives",
    //         "Create agreements with sponsors to ensure that sponsorship requirements and agreements are met",
    //         "Manage relationships with existing and potential sponsors",
    //         "Maintain up-to-date information regarding sponsor contact (email, mobile number, date of agreement",
    //         "Be present in MTech events and manage sponsors that may be present",
    //     ],
    //     skills: [
    //         "Communication",
    //         "Negotiation",
    //         "Proactive & Confident",
    //         "Knowledge of potential sponsorship opportunities and consulting businesses is desirable"
    //     ],
    //     link: "https://forms.office.com/Pages/ResponsePage.aspx?id=z_NbDvQft0aRdlLFOMIqTdAQ4Mml6lFEjRawxpFquJtUMkkyNDVINzRXRVE0WDNVTUsyU1pRN1gzRSQlQCN0PWcu"
    // },
    {
        id: "EO-23JAN23",
        title: "Event Officer",
        descriptions: [
            "Report to President, Vice-President (Operations) and Events Director.",
            "Manage event planning and execution",
            "Think of activities during events",
            "Facilitate interacation between sutdents during events",
            "Workg with the Marketing team to suggest designs for promotional materials",
            "Brainstorming potential events for the semester",
            "Facilitate events throughout the semester (Note: event participation is required)",
            "May be required to speak during events",
            "Interact and mingle with club members during events",
            "Record attendance and maintain an up-to-date list of guests participating in the event.",
            "Provide feedback to the executive team after each event to further improve it"
        ],
        skills:[
            "Proactive",
            "Adaptive to any arising issues",
            "Interpersonal skills",
            "Previous experience as an Activities/Events officer is desirable but not required",
        ],
        link: "https://l.instagram.com/?u=http%3A%2F%2Flinktr.ee%2Fmtechcc&e=AT1z4bN77GnV_YlmAOg8I2lID6gl7aTx1m1Nvin59Z2e1pWin_yRu1Qsr_mp5L_SaFX-IwemhqN6gfpNDg7SqBsnf1o7qZ5zHev71H0"
    },
    {
        id: "MO-23JAN23",
        title: "Marketing Officer",
        descriptions: [
            "Report to President, Vice-President (Operations) and Marketing director",
            "Create newsletters and share information about consulting",
            "Experience in designing promotional materials",
            "Publish marketing content to promote the club's goals, mission and events",
            "Be present at MTech events",
            "Ensure sponsor material is marketed to meet their promotional needs as per the sponsorship agreement",
        ],
        skills: [
            "Creativity",
            "Proficiency in digital software to design posters and graphics",
            "Photography skills (not essential but preferred)",
            "Portfolio of past work and designs (not essential but recommended)",
            "Previous marketing experience is desirable",
            "Web design experience is desirable but not required"
        ],
        link: "https://l.instagram.com/?u=http%3A%2F%2Flinktr.ee%2Fmtechcc&e=AT1z4bN77GnV_YlmAOg8I2lID6gl7aTx1m1Nvin59Z2e1pWin_yRu1Qsr_mp5L_SaFX-IwemhqN6gfpNDg7SqBsnf1o7qZ5zHev71H0"
    }
]

export default function loadPositions(){
    return new Promise((resolve, reject) => {
        setTimeout(resolve(positions), Math.random()*1000);
    })
}