import ContactText from "./Text/ContectText";
import FootBarText from "./Text/FootBarText";
import FootText from "./Text/FootText";
const FootBar = () => {
    return (
        <div className=" bg-indigo-200/90 mt-20 shadow-slate-800/40 shadow-2xl bottom-0 block justify-between w-full border border-indigo-200/50 p-16 pb-5 rounded-3xl rounded-b-none flex-nowrap">
            <div className="block lg:flex">
                <FootBarText />
                <ContactText />
            </div>
            <FootText />
        </div>
    )
}
export default FootBar;