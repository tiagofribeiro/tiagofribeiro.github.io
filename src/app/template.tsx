import { GlobalStyles } from "@/app/_lib/global/styles";
import Header from "./_ui/organisms/Header";
import Background from "./_ui/atoms/Background";
import Footer from "./_ui/organisms/Footer";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        // Context
        <>
            <GlobalStyles />
            <Background />
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default RootTemplate;