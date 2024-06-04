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
            detailsSection.style.display = "block";

            window.scrollTo({
                top: detailsSection.offsetTop + 100,
                behavior: "smooth",
            });
        });
    });

    const detailBtn = document.querySelector(".detail-btn");
    const workSection = document.querySelector(".works");

    detailBtn.addEventListener("click", function () {
        window.scrollTo({
            top: workSection.offsetTop + 100,
            behavior: "smooth",
        });
    });
});
