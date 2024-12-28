import ImageCard from "../components/Card/ImageCard";
import WelcomeText from "../components/Text/WelcomeText";
const Home = () => {
    return (
        <>
            <span className="font-Mistral font-black text-4xl lg:text-7xl  text-blue-900 tracking-wider w-full">Welcome to my Portfolio !</span><br></br>
            <div className="lg:flex justify-around items-center m-5 my-10 mb-20 h-3/4 block text-center">
                <ImageCard />
                <WelcomeText />
            </div>
        </>
    )
}
export default Home;