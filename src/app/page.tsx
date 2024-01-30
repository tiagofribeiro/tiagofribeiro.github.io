import Link from "next/link";

import { HOME_TEXT } from "@/app/lib/constants/strings/home";
import ICONS from "@/app/lib/constants/assets/icons";
import URLS from "@/app/lib/constants/strings/urls";

import { Container, Section } from "./style"
import Frame from "./ui/atoms/Frame";
import Text from "./ui/atoms/Text";
import FlexibleList from "./ui/molecules/FlexibleList";

const Home = () => {
  return (
    <Container>
      <Frame
        direction={'column'}
        marginX={16}
        marginY={80}
      >
        <Presentation />
        <Projects />
        <Skills />
      </Frame>
    </Container>
  )
}

const Presentation = () =>
  <Section>
    <Text
      title
      as={'h1'}
      maxW={40}
    >
      {HOME_TEXT.main}
      <Text
        bold
        fontSize={60}
        color={'var(--green-300)'}
      >_
      </Text>
    </Text>
    <Text primary marginY={40}>
      {HOME_TEXT.sub}
    </Text>
    <FlexibleList gapX={12}>
      <Link
        href={URLS.github}
        target="_blank"
        rel="noopener noreferrer"

      >
        <ICONS.github width={32} height={32} />
      </Link>
      <Link
        href={URLS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ICONS.linkedin width={32} height={32} />
      </Link>
    </FlexibleList>
  </Section>


const Projects = () => {
  return (
    <Section>
      <Text title as={'h3'}>
        {HOME_TEXT.title1}
        <Text
          bold
          fontSize={32}
          color={'var(--green-300)'}
        >_
        </Text>
      </Text>
    </Section>
  )
}

const Skills = () => {
  return (
    <Section>
      <Text title as={'h3'}>
        {HOME_TEXT.title2}
        <Text
          bold
          fontSize={32}
          color={'var(--green-300)'}
        >_
        </Text>
      </Text>
    </Section>
  )
}

export default Home;