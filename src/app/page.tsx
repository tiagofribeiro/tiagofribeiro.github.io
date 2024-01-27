import { HOME_TEXT } from "@/app/lib/constants/strings/home";

import { Container, Section } from "./style"
import Frame from "./ui/atoms/Frame";
import Text from "./ui/atoms/Text";

const Home = () => {
  return (
    <Container>
      <Frame direction={'column'} marginY={80}>
        <Section>
          {/* ARRUMA ISSO AQUI ZÉ */}
          <Text
            title
            as={'h1'}
            maxW={40}
          >
            {HOME_TEXT.main[0]}
            <Text fontSize={60} color={'var(--green-300)'}><b>{HOME_TEXT.main[1]}</b></Text>
          </Text>
          <Text marginY={40}>
            {HOME_TEXT.sub}
          </Text>
        </Section>
      </Frame>
    </Container>
  )
}

export default Home;