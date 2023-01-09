import Image from "next/image";
import styles from "../styles/MemberDisplay.module.css";

export default function MemberDisplay({memberList}){
    return <div className={styles.container}>
    {memberList
    .map(list => 
        <div key={list.group} className={styles.memberGroup}>
            <h2 className="group-title">{list.group} Commitee</h2>
            <div className={styles.members}>
                {list.members.map(member =>
                    <div key={member.name} className={styles.memberItem}>
                        <Image
                            src={member.photo}
                            alt={member.name}
                        />
                        <h3 className="position">{member.position}</h3>
                        <div className="name">{member.name}</div>
                    </div>
                )}
            </div>
        </div>
    )}
</div>
}