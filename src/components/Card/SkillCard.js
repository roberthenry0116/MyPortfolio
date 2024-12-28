export default function SkillCard(props) {
    let text = [];
    const array = props.skill.split(",");
    array.forEach((d, i) => {
        text[i] = <li className="list-disc m-3 text-left">{d}</li>;
    });
    return (
        <div className="block md:flex p-5 w-full items-center">
            <div className="w-full p-5 lg:p-20 ">
                <img className="overflow-hidden rounded-2xl" src={props.src} alt="skillCard_image"></img>
            </div>
            <div className="w-full text-2xl md:text-lg lg:text-3xl flex justify-center">
                <ul className="text-center">
                    {text}
                </ul>
            </div>
        </div>
    )
}