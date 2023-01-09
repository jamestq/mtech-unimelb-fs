import president from '../assets/member-photo/pnn.png';
import vpOps from '../assets/member-photo/kbp.png';
import vpCon from '../assets/member-photo/mm.png';
import eduO from '../assets/member-photo/js.png';
import trea from '../assets/member-photo/yc.png';
import sec from '../assets/member-photo/utq.png';
import md from '../assets/member-photo/placeholder.png';
import ed from '../assets/member-photo/tz.png';
import sd from '../assets/member-photo/vs.png';

const memberList = [
    {
        group: "Executive",
        members: [
            {
                name: "Phong Noon Nan",
                position: "President",
                photo: president,
            },
            {
                name: "Kezia Rebecca Pranata",
                position: "VP of Operations",
                photo: vpOps,
            },
            {
                name: "Monish Manikanda",
                position: "VP of Consulting",
                photo: vpCon,
            },
            {
                name: "Jiayi Shi",
                position: "Education Officer",
                photo: eduO,
            },
            {
                name: "Yue William Chen",
                position: "Treasurer",
                photo: trea,
            },
            {
                name: "Uy Thinh Quang",
                position: "Secretary",
                photo: sec,
            },
        ]
    },
    {
        group: "General",
        members: [
            {
                name: "Binai Wang",
                position: "Marketing Director",
                photo: md,
            },
            {
                name: "Tianqi Zhang",
                position: "Events Director",
                photo: ed,
            },
            {
                name: "Vaibhav Sinha",
                position: "Sponsorship Director",
                photo: sd,
            }
        ]
    }
]

export default function loadMembers(){
    return new Promise((resolve, reject) => {
        setTimeout(resolve(memberList), Math.random()*1000);
    })
}