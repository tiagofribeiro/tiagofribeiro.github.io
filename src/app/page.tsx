import Link from "next/link";

import { HOME_TEXT } from "@/app/_lib/constants/strings/home";
import { ICONS, ICONS_STACK } from "@/app/_lib/constants/icons";
import { URLS } from "@/app/_lib/constants/strings/urls";

import { CardDescription, CardImage, Container, Section } from "./style"
import { Project } from "./_models/project";
import Frame from "./_ui/atoms/Frame";
import Text from "./_ui/atoms/Text";
import Card from "./_ui/atoms/Card";
import List from "./_ui/atoms/List";

const getProjects = async (): Promise<Project[]> => {
  try {
    const url = process.env.NEXT_PUBLIC_ROUTE_PROJECTS ?? 'http://localhost:3000/api/Projects';
    const res = await fetch(url);

    if (res.status == 500) {
      throw 'Não foi possível recuperar os dados no momento.'
    }

    return res.json();
  } catch (error) {
    return [];
  }
};

const SKILLS = [
  <ICONS_STACK.html key={'html'}/>,
  <ICONS_STACK.js key={'js'}/>,
  <ICONS_STACK.react key={'react'}/>,
  <ICONS_STACK.flutter key={'flutter'}/>,
  <ICONS_STACK.python key={'python'}/>,
  <ICONS_STACK.csharp key={'csharp'}/>,
  <ICONS_STACK.sqlite key={'sqlite'}/>,
  <ICONS_STACK.mongo key={'mongo'}/>,
]

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

// Content
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


const Projects = async () => {
  const projects = await getProjects();  

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
      <List
        direction={'column'}
        marginY={40}
        gapY={40}
      >
        {projects.map((item, index) => {
          return (
            <Card key={index}>
              <CardDescription>
                <Text bold fontSize={32}>
                  {item.title}
                </Text>
                <Text>{item.description}</Text>
                <Link style={{ color: 'var(--green-300)' }} href={item.urls.website}><Text>{item.urls.website}</Text></Link>
              </CardDescription>
              <CardImage>(Imagem)</CardImage>
            </Card>
          )
        })}
      </List>
    </Section>
  )
}

const Skills = () =>
  <Section>
    <Text title as={'h3'}>
      {HOME_TEXT.title2}
      <Text
        bold
        fontSize={32}
        color={'var(--green-300)'}
      >_
      </Text>
      <List marginY={40} gapX={40}>
        {SKILLS.map((item, index) =>
          <div key={index}>
            {item}
          </div>
        )}
      </List>
    </Text>
  </Section>

export default Home;