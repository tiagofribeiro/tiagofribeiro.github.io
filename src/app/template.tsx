import Header from "./ui/organisms/Header";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        // Context
        <>
            <Header />
            {children}
        </>
    );
}

export default RootTemplate;