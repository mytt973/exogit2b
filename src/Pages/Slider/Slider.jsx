import { Carousel, CarouselItem } from "react-bootstrap";


export default function Slider(){
    return(
        <>
            test de sllilder
           
        <Carousel data-bs-theme="dark">
            <CarouselItem>
                <img height={500} width="100%" src="https://www.ecocentric.fr/img/108/370339/4/o/p/pleine-lune-eau-de-parfum.jpg" alt="gzr5gzoieghp"/>
            </CarouselItem>
            <CarouselItem>
                <img height={500} width="100%" src="https://parisparfums.fr/3289-large_default/parfum-hermes-ombredesmerveilles-eaudeparfum.jpg" alt="gzrg1zoieghp"/>
            </CarouselItem>
            <CarouselItem>            
                <img height={500} width="100%" src="https://cdn.idealo.com/folder/Product/6751/2/6751285/s4_produktbild_mittelgross/yves-saint-laurent-libre-eau-de-parfum-50ml.jpg" alt="gzrgzoieghp"/>
            </CarouselItem> 
            <CarouselItem>            
                <img height={500} width="100%" src="https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw36457e9f/images/hi-res/SKU/SKU_3434/438875_swatch.jpg?sw=585&sh=585&sm=fit" alt="gzrgzoieghp"/>
            </CarouselItem>
        </Carousel>
        </>
    )
}