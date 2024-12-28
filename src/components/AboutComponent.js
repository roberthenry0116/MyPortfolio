export default function AboutComponent() {
    return (
        <div className="block xl:flex p-5 md:p-10 fade">
            <div className="w-full p-2 md:p-24 xl:p-2 overflow-hidden">
                <img src="/images/About-image.png" alt="about_image" className="w-full rounded-full"></img>
            </div>
            <div className="w-full p-2 md:p-10">
                <span className="font-black text-bold text-xl md:text-4xl">I am a full-stack developer</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span className="text-sm md:text-2xl">I am a full-stack web wizard with a passion for crafting incredible user experiences.
                    Having a strong background in software quality assurance and automation, I approach technical problems with the end user in mind.
                    As both a one-person powerhouse and a Scrum team player in Agile environments I can seamlessly integrate into any existing work flow and bring some serious energy to the table.
                    Let me put my skills to work for you!
                </span>
                <br></br>
                <br></br>
                <br></br>
                <span className="text-sm md:text-2xl">When I'm not honing my software development skills, you can find me cruising around on my motorcycle, exploring new roads and pushing my limits.</span>
            </div>

        </div>
    )
}