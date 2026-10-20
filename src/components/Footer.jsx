const Footer = () => {
    return (
        <footer className="border-t border-line">
            <div className="max-w-5xl mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-ink-faint">
                <p>&copy; 2026 Song Seunghyeon. All Rights Reserved.</p>
                <a href="#home" className="hover:text-accent transition-colors">
                    맨 위로 ↑
                </a>
            </div>
        </footer>
    );
};

export default Footer;
