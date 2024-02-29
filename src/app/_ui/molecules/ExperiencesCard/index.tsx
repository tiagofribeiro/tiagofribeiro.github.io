import { HOME_TEXT } from "@/app/_lib/constants/strings";

import Card from "../../atoms/Card";
import Text from "../../atoms/Text";
import { ExperiencesDescription, ExperiencesPreview } from "./style";

const ExperiencesCard = () => {
    return (
        <Card bgColor={'var(--grey-100)'}>
            <ExperiencesDescription>
                <Text
                    title
                    as={'h3'}
                >
                    {HOME_TEXT.title3}
                    <Text
                        bold
                        fontSize={24}
                        color={'var(--green-300)'}
                    >
                        🡲
                    </Text>
                </Text>
                <Text marginY={24}>
                    {HOME_TEXT.subtitle3}
                </Text>
            </ExperiencesDescription>
            <ExperiencesPreview>
                (Imagem)
            </ExperiencesPreview>
        </Card>
    );
}

export default ExperiencesCard;