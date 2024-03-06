import { StaticImageData } from "next/image";

import ExperiencesImg from "../../../../public/images/experiences.png";

import SmashPreview from "../../../../public/images/previews/smash.png";
import HtmlPreview from "../../../../public/images/previews/html.png";

interface ImageTypes {
    [key: string]: StaticImageData;
}

const IMAGES: ImageTypes = {
    experiences: ExperiencesImg,
}

const IMAGES_PREVIEW: ImageTypes = {
    smash: SmashPreview,
    html: HtmlPreview,
}

export { IMAGES, IMAGES_PREVIEW };