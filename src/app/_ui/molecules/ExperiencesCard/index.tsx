'use client'

import { useRouter } from "next/navigation";

import { HOME_TEXT } from "@/app/_lib/constants/strings";
import { IMAGES } from "@/app/_lib/constants/images";

import { ExperiencesDescription, ExperiencesImage, ExperiencesPreview } from "./style";
import Card from "../../atoms/Card";
import Text from "../../atoms/Text";

const ExperiencesCard = () => {
    const router = useRouter();

    return (
        <Card hasClick onClick={() => router.push('/about/experience')} bgColor={'var(--grey-100)'}>
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
                <ExperiencesImage src={IMAGES.experiences.src} />
            </ExperiencesPreview>
        </Card>
    );
}

export default ExperiencesCard;