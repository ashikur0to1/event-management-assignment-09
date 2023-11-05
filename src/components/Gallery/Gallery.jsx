import galleryPic1 from "../../assets/gallery-1.jpg"
import galleryPic2 from "../../assets/gallery-2.jpg"
import galleryPic3 from "../../assets/gallery-3.jpg"
import galleryPic4 from "../../assets/gallery-4.jpg"
import galleryPic5 from "../../assets/gallery-5.jpg"
import galleryPic6 from "../../assets/gallery-6.jpg"
import galleryPic7 from "../../assets/gallery-7.jpg"
import galleryPic8 from "../../assets/gallery-8.jpg"
import galleryPic9 from "../../assets/gallery-9.jpg"

const Gallery = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <img className="h-[400px] w-full" src={galleryPic1} alt="" />
            <img className="h-[400px] w-full" src={galleryPic2} alt="" />
            <img className="h-[400px] w-full" src={galleryPic3} alt="" />
            <img className="h-[400px] w-full" src={galleryPic4} alt="" />
            <img className="h-[400px] w-full" src={galleryPic5} alt="" />
            <img className="h-[400px] w-full" src={galleryPic6} alt="" />
            <img className="h-[400px] w-full" src={galleryPic7} alt="" />
            <img className="h-[400px] w-full" src={galleryPic8} alt="" />
            <img className="h-[400px] w-full" src={galleryPic9} alt="" />
        </div>
    );
};

export default Gallery;