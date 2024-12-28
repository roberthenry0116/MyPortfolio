import { useState } from 'react';
import '../../App.css';
export { useState } from 'react'
const imageList = [
    {
        index: '0',
        url: '/images/projects1.png',
        name: 'Project 1',
        alt: 'Project 1',
    },
    {
        index: '1',
        url: '/images/projects2.png',
        name: 'Project 2',
        alt: 'Project 2',
    },
    {
        index: '2',
        url: '/images/projects3.png',
        name: 'Project 3',
        alt: 'Project 3',
    },
    {
        index: '3',
        url: '/images/projects4.png',
        name: 'Project 4',
        alt: 'Project 4',
    },
    {
        index: '4',
        url: '/images/projects5.png',
        name: 'Project 5',
        alt: 'Project 5',
    },
    {
        index: '5',
        url: '/images/projects6.jpg',
        name: 'Project 6',
        alt: 'Project 6',
    },
];
export default function ImageSlide() {
    const imageBox = [];
    const [appearImage, setAppearImage] = useState(<img className="fade rounded-lg shadow-lg shadow-black" src={imageList[0].url} alt={imageList[0].alt}></img>);
    imageList.forEach((d, i) => {
        imageBox[i] = <div className="opacity-70 hover:opacity-100 flex p-1 lg:p-2 cursor-pointer hover:scale-110 transition-all" ><img onClick={imageTarget} className="rounded-lg shadow-lg shadow-black" src={d.url} alt={d.alt} id={d.index}></img></div>
    })
    function imageTarget(event) {
        const target = event.target;
        setAppearImage(<img className="fade rounded-lg shadow-lg shadow-black" src={target.src} alt={target.alt}></img>);
    }
    return (
        <div className="p-2 lg:p-5 fade">
            <div id="largeImage" className="p-5 lg:p-10 w-full">
                {appearImage}
            </div>
            <div id='smallImage' className="w-full flex justify-evenly">
                {imageBox}
            </div>
        </div>
    )
}