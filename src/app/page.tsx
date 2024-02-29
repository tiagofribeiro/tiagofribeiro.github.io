import { Suspense } from "react";
import Link from "next/link";

import { HOME_TEXT, URLS } from "@/app/_lib/constants/strings";
import { ICONS } from "@/app/_lib/constants/icons";

import { Container } from "./style"
import Frame from "./_ui/atoms/Frame";
import Text from "./_ui/atoms/Text";
import List from "./_ui/atoms/List";
import Loading from "./_ui/atoms/Loading";
import Section from "./_ui/molecules/Section";
import ProjectsList from "./_ui/dynamic/ProjectsList";
import SkillsList from "./_ui/dynamic/SkillsList";
import ContactCard from "./_ui/molecules/ContactCard";
import ExperiencesCard from "./_ui/molecules/ExperiencesCard";

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
                <Experiences />
                <Contact />
            </Frame>
        </Container>
    )
}

// Content
const Presentation = () =>
    <Section main title={HOME_TEXT.main}>
        <Text primary marginY={40}>
            {HOME_TEXT.sub}
        </Text>
        <List gapX={12}>
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
        </List>
    </Section>


const Projects = () =>
    <Section title={HOME_TEXT.title1}>
        <Suspense fallback={<Loading type={'projects'} />}>
            <ProjectsList />
        </Suspense>
    </Section>

const Skills = () =>
    <Section title={HOME_TEXT.title2}>
        <SkillsList />
    </Section>

const Experiences = () => 
    <Section>
        <ExperiencesCard />
    </Section>

const Contact = () =>
    <Section>
        <ContactCard />
    </Section>

export default Home;