import SkillCard from "../Card/SkillCard";

export default function CardBox(){
    return(
        <div className="block p-5 fade">
            <SkillCard src="/images/frontEnd.jpg" skill = "HTML,  CSS,  TailwindCSS,  Bootstrap,  JavaScript,  TypeScript,  React.js,  Next.js"/>
            <SkillCard src="/images/backEnd.png" skill = "Node.js,  Express, MongoDB,  PHP,  Laravel" />
            <SkillCard src="/images/Conversation.jpg" skill = "Google Message,  Telegram,  Skype,  Slack" />
        </div>
    )
}