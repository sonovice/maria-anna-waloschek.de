import type { Component, JSX } from "solid-js";
import Footer from "./Footer";
import Header from "./Header";

const Layout: Component<{ children: JSX.Element }> = (props) => {
    return (
        <div class="flex h-dvh flex-col">
            <Header />
            <div class="grow overflow-y-auto scroll-smooth">
                {props.children}
                <Footer />
            </div>

        </div>
    );
};

export default Layout; 