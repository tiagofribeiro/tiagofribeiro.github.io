import { GlobalStyles } from "@/app/_lib/global/styles";
import Header from "./_ui/organisms/Header";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        // Context
        <>
            <GlobalStyles />
            <Header />
            {children}
        </>
    );
}

export default RootTemplate;