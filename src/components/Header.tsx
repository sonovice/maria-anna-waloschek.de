import {
	type Component,
	For,
	createEffect,
	createSignal,
	onCleanup,
	createMemo,
} from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";

const baseNavLinks = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "Über mich" },
	{ id: "portfolio", label: "Portfolio" },
	{ id: "references", label: "Referenzen" },
	{ id: "vita", label: "Vita" },
	{ id: "publications", label: "Publikationen" },
	{ id: "contact", label: "Kontakt" },
];

const Header: Component = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = createSignal(false);
	const [activeLinkHref, setActiveLinkHref] = createSignal<string | null>(
		location.pathname === "/" ? "#home" : null,
	);

	const isRootPath = createMemo(() => location.pathname === import.meta.env.BASE_URL);

	const navLinks = createMemo(() =>
		baseNavLinks.map((link) => ({
			...link,
			href: isRootPath() ? `#${link.id}` : `/#${link.id}`,
		})),
	);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen());
	const closeMenu = () => setIsMenuOpen(false);

	createEffect(() => {
		if (!isRootPath()) {
			if (activeLinkHref() !== null) {
				setActiveLinkHref(null);
			}
			return;
		}

		if (activeLinkHref() === null) {
			setActiveLinkHref("#home");
		}

		const sections = baseNavLinks.map((link) =>
			document.getElementById(link.id),
		);
		const validSections = sections.filter(
			(section): section is HTMLElement => section !== null,
		);

		if (validSections.length === 0) {
			return;
		}

		const sectionIdToHrefMap = new Map<string, string>();
		for (const link of baseNavLinks) {
			const section = document.getElementById(link.id);
			if (section) {
				sectionIdToHrefMap.set(section.id, `#${link.id}`);
			}
		}

		const observerOptions = {
			root: null,
			rootMargin: "-100px 0px -85% 0px",
			threshold: 0,
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			let latestIntersectingEntry: IntersectionObserverEntry | null = null;

			for (const entry of entries) {
				if (entry.isIntersecting) {
					latestIntersectingEntry = entry;
				}
			}

			if (latestIntersectingEntry) {
				const href = sectionIdToHrefMap.get(latestIntersectingEntry.target.id);
				if (href && isRootPath() && activeLinkHref() !== href) {
					setActiveLinkHref(href);
				}
			}
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);

		for (const section of validSections) {
			observer.observe(section);
		}

		onCleanup(() => {
			for (const section of validSections) {
				observer.unobserve(section);
			}
			observer.disconnect();
		});
	});

	const handleClick = (event: MouseEvent, href: string) => {
		event.preventDefault();

		if (isMenuOpen()) {
			closeMenu();
		}

		const targetId = href.substring(href.lastIndexOf("#") + 1);
		const targetElement = document.getElementById(targetId);

		if (isRootPath()) {
			if (targetElement) {
				setActiveLinkHref(`#${targetId}`);
				targetElement.scrollIntoView({ behavior: "smooth" });
			} else if (href === "#home") {
				setActiveLinkHref("#home");
				window.scrollTo({ top: 0, behavior: "smooth" });
			}
		} else {
			navigate(`/#${targetId}`, { resolve: false });
			setActiveLinkHref(null);
		}
	};

	return (
		<div class="w-full shadow sticky top-0 z-10">
			<div class="bg-white text-black flex flex-row justify-between items-center  h-fit px-4 container mx-auto">
				<button
					type="button"
					onClick={(e) => handleClick(e, isRootPath() ? "#home" : "/#home")}
					class="text-lg uppercase leading-4 py-4 hover:cursor-pointer"
				>
					<div class="">Maria Anna</div>
					<div class="font-extrabold">Waloschek</div>
				</button>
				<nav class="hidden lg:flex flex-row uppercase tracking-wide font-medium">
					<For each={navLinks()}>
						{(link) => (
							<a
								href={link.href}
								class="px-4 py-1 inline-block transition-colors duration-200 border-b-4"
								classList={{
									"border-yellow-300": isRootPath() && activeLinkHref() === `#${link.id}`,
									"border-transparent hover:border-yellow-300": !(isRootPath() && activeLinkHref() === `#${link.id}`),
								}}
								onClick={(e) => handleClick(e, link.href)}
							>
								{link.label}
							</a>
						)}
					</For>
				</nav>
				<div class="block lg:hidden">
					<button
						class="p-2 hover:cursor-pointer"
						type="button"
						onClick={toggleMenu}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<title>Open menu</title>
							<line x1="4" x2="20" y1="12" y2="12" />
							<line x1="4" x2="20" y1="6" y2="6" />
							<line x1="4" x2="20" y1="18" y2="18" />
						</svg>
					</button>
				</div>
			</div>

			{isMenuOpen() && (
				<div class="fixed inset-0 bg-black text-white flex flex-col justify-center items-center z-50 lg:hidden">
					<button
						class="absolute top-4 right-4 p-2 hover:cursor-pointer"
						type="button"
						onClick={closeMenu}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<title>Close menu</title>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>

					<nav class="flex flex-col items-center uppercase tracking-wide font-bold text-xl">
						<For each={navLinks()}>
							{(link) => (
								<a
									href={link.href}
									class="p-4 inline-block transition-colors duration-200"
									classList={{
										"text-yellow-300": isRootPath() && activeLinkHref() === `#${link.id}`,
										"text-white hover:text-yellow-300": !(isRootPath() && activeLinkHref() === `#${link.id}`),
									}}
									onClick={(e) => handleClick(e, link.href)}
								>
									{link.label}
								</a>
							)}
						</For>
					</nav>
				</div>
			)}
		</div>
	);
};

export default Header;
