import { GlobalStyles } from "@/app/_lib/global/styles";
import Header from "./_ui/organisms/Header";
import Background from "./_ui/atoms/Background";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        // Context
        <>
            <GlobalStyles />
            <Background />
            <Header />
            {children}
        </>
    );
}

export default RootTemplate;