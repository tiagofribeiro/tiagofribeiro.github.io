import { ICONS } from "@/app/_lib/constants/icons";
import { HOME_TEXT, URLS } from "@/app/_lib/constants/strings";

import { LinkSocial, ContactDescription, ContactSocial } from "./style";
import Card from "../../atoms/Card";
import Text from "../../atoms/Text";

const ContactCard = () => {
    return (
        <Card
            gapX={40}
            paddingX={40}
            paddingY={32}
            bgColor={'var(--green-300)'}
        >
            <ContactDescription>
                <Text
                    title
                    as={'h3'}
                    color={'var(--grey-100)'}
                >
                    {HOME_TEXT.title4}
                </Text>
                <Text
                    marginY={24}
                    color={'var(--grey-100)'}
                >
                    {HOME_TEXT.subtitle4}
                </Text>
            </ContactDescription>
            <ContactSocial>
                <LinkSocial
                    href={URLS.mail}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ICONS.mail fill={'var(--green-300)'} width={32} height={32} />
                    <Text>{HOME_TEXT.mail}</Text>
                </LinkSocial>
                <LinkSocial
                    href={URLS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ICONS.linkedin fill={'var(--green-300)'} width={32} height={32} />
                    <Text>{HOME_TEXT.linkedin}</Text>
                </LinkSocial>
            </ContactSocial>
        </Card>
    );
}

export default ContactCard;