import type { Component } from "solid-js";

const Footer: Component = () => {
    return <div
        class="w-full text-sm bg-neutral-500 text-white flex sm:flex-row flex-col items-center justify-center py-2">
        <div>Copyright © {new Date().getFullYear()} Maria Anna Waloschek</div>
        <div class="hidden sm:block">&nbsp;|&nbsp;</div>
        <div>
            <a href="impressum" class="underline">Impressum</a>
        </div>
    </div>;
};

export default Footer;

