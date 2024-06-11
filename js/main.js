document.addEventListener("DOMContentLoaded", function () {
    // 메뉴 이벤트
    const menu = document.querySelector(".menu-icon button");
    const navbar = document.querySelector(".navbar");

    menu.addEventListener("click", function () {
        menu.classList.toggle("on");
        navbar.classList.toggle("on");
    });

    // 메뉴 이동 이벤트
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            navLinks.forEach((navLink) => {
                navLink.classList.remove("on");
            });

            link.classList.add("on");

            const targetSection = sections[index];
            const sectionTop = targetSection.offsetTop;

            menu.classList.remove("on");
            navbar.classList.remove("on");

            window.scrollTo({
                top: sectionTop,
                behavior: "smooth",
            });
        });
    });

    window.addEventListener("scroll", () => {
        let currentSectionIndex = 0;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - navbar.offsetHeight;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionIndex = index;
            }
        });

        navLinks.forEach((navLink) => {
            navLink.classList.remove("on");
        });

        navLinks[currentSectionIndex].classList.add("on");
    });

    // 프로젝트 메뉴 이벤트
    const tabs = document.querySelectorAll(".tab-list button");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((otherTab) => {
                otherTab.classList.remove("on");
            });

            tab.classList.add("on");

            const targetCategory = tab.getAttribute("data-category");
            const workAreas = document.querySelectorAll(".work-area");

            workAreas.forEach((workArea) => {
                if (targetCategory === "all") {
                    workArea.style.display = "block";
                } else {
                    workArea.style.display = workArea.classList.contains(targetCategory) ? "block" : "none";
                }
            });
        });
    });

    // 프로젝트 상세 이벤트
    const works = document.querySelectorAll(".work-btn");
    const detailsSection = document.querySelector(".details");
    const detailWraps = document.querySelectorAll(".detail-wrap");

    works.forEach((work) => {
        work.addEventListener("click", function () {
            detailWraps.forEach((wrap) => {
                wrap.style.display = "none";
            });

            const targetDetail = this.getAttribute("data-detail");
            const targetDetailWrap = document.querySelector(`.detail-wrap.${targetDetail}`);

            if (targetDetailWrap) {
                targetDetailWrap.style.display = "flex";
            }
            detailsSection.classList.remove("hide");

            window.scrollTo({
                top: detailsSection.offsetTop - 50,
                behavior: "smooth",
            });
        });
    });

    const detailBtn = document.querySelector(".detail-btn button");
    const workSection = document.querySelector(".works");

    detailBtn.addEventListener("click", function () {
        window.scrollTo({
            top: workSection.offsetTop - 50,
            behavior: "smooth",
        });
        detailsSection.classList.add("hide");
    });

    ScrollReveal({ distance: "80px", duration: 2000, delay: 200 });

    ScrollReveal().reveal(".profile-area, .title", { origin: "top" });
    ScrollReveal().reveal(".profile-img ", { origin: "bottom" });
    ScrollReveal().reveal(".skills-wrap, .tab-area, .work ", { origin: "left" });
});
