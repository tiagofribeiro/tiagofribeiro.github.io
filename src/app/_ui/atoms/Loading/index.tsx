import { CardLoad, DescriptionLoad, ImageLoad, TextLoad, TitleLoad, UrlLoad } from "./style";
import { LoadingTypes } from "./types";

const Loading = ({ type }: LoadingTypes) => {

    return (
        (
            type == 'projects' &&
            <CardLoad>
                <DescriptionLoad>
                    <TitleLoad />
                    <TextLoad />
                    <TextLoad />
                </DescriptionLoad>
                <ImageLoad />
            </CardLoad>
        )
    );
}

export default Loading;