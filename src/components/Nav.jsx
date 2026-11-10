import { useEffect, useRef, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "career", label: "Career" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
];

const sectionIds = navItems.map((item) => item.id);

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeId = useActiveSection(sectionIds);
    const progressRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // 페이지 스크롤 진행률 바 + 스크롤 시 헤더 스타일 전환
    useEffect(() => {
        let frame = 0;
        const update = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? window.scrollY / max : 0;
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
            setIsScrolled(window.scrollY > 10);
        };
        const handleScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setIsOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
                isScrolled || isOpen ? "border-line bg-paper/80 backdrop-blur-md" : "border-transparent bg-transparent"
            }`}
        >
            <span
                ref={progressRef}
                aria-hidden="true"
                className="absolute left-0 bottom-[-1px] h-[2px] w-full bg-accent origin-left scale-x-0"
            />
            <div className="max-w-5xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, "home")}
                    className="text-lg font-bold tracking-tight text-ink"
                >
                    SSH<span className="text-accent">.</span>
                </a>

                {/* 데스크탑 내비 */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => handleNavClick(e, item.id)}
                                className={`group relative py-1 text-sm font-medium transition-colors ${
                                    activeId === item.id ? "text-accent" : "text-ink-soft hover:text-ink"
                                }`}
                            >
                                {item.label}
                                <span
                                    aria-hidden="true"
                                    className={`absolute left-0 -bottom-0.5 h-[1.5px] w-full bg-current origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                        activeId === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* 모바일 햄버거 */}
                <button
                    className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="메뉴 열기"
                    aria-expanded={isOpen}
                >
                    <span className={`block w-5 h-[2px] bg-ink transition-transform ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
                    <span className={`block w-5 h-[2px] bg-ink transition-transform ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
                </button>
            </div>

            {/* 모바일 드롭다운 */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 border-t border-line ${
                    isOpen ? "max-h-80" : "max-h-0 border-t-0"
                }`}
            >
                <ul className="flex flex-col px-5 py-2">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => handleNavClick(e, item.id)}
                                className={`block py-3 text-sm font-medium ${
                                    activeId === item.id ? "text-accent" : "text-ink-soft"
                                }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Nav;
