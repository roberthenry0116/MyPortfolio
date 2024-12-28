import ImageCard from "../Card/ImageCard";

export default function FootBarText(){
    return(
        <div className="w-full mb-10">
            <span className="font-bold text-xl lg:text-4xl text-black tracking-wider w-full pb-2">My Portfolio !</span>
            <hr className=" border-black mt-2"></hr>           
            <div className="w-full m-0 p-0 float-left">
                <ImageCard />
            </div>            
            <span className="text-sm lg:text-xl text-black tracking-wider w-full p-1 ">Made by Robert Henry</span>
        </div>
    )
}