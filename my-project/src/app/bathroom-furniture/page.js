import Materials from "../components/Materials/Materials";
import Features from "../components/Features/Features";
import Collections from "../components/Collections/Collections";
import Slider from "../components/Slider";
import Modules from "../components/Modules";
import sliderData from "../data/homeSliderData.json";
import CompanyFeatures from "../components/Features/CompanyFeatures";

export default function BathroomFurniture() {
    return (
        <div>
            <Slider sliderData={sliderData} />
            <Collections />
            <CompanyFeatures />
            <Features />
            <Modules />
            <Materials />
        </div>
    )
}