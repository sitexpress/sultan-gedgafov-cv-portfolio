/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    const ru = document.querySelectorAll(".btn-ru")
    const en = document.querySelectorAll(".btn-en")
    const ln = document.querySelectorAll("#ln")
 
    const lnData = [
    "Resume Sultan Gedgafov",
    "Резюме Султан Гедгафов",

    "Sultan Gedgafov",
    "Султан Гедгафов",

    "About",
    "Инфо",

    "Portfolio",
    "Портфолио",

    "Experience",
    "Опыт",

    "Education",
    "Образование",

    "Skills",
    "Навыки",

    "Sultan Gedgafov",
    "Султан Гедгафов",

    "Hello, I'm Sultan. I'm a frontend developer. I have one and a half year of experience as a front-end developer and currently I’m working on improveing my fronend skill sets. Also in my portfolio you will find several mock projects to evaluate the quality of the code.",
    "Привет, я Султан. Я фронтенд-разработчик. У меня полуторалетний опыт работы в разработке, и в настоящее время я работаю над улучшением своих навыков во фронтенде. Также у меня в портфолио вы найдете несколько моковых проектов для оценки качества кода.",

    "Portfolio",
    "Портфолио",

    "Experience",
    "Опыт",

    "Working on an internal project:",
    "Работа над внутренним проектом:",

    "November 2022 - November 2023",
    "Ноябрь 2022 - Ноябрь 2023",

    "Development of multi-platform websites. HTML, CSS, SCSS, Gulp, JavaScript, etc.",
    "Разработка мультиплатформенных сайтов. HTML, CSS, SCSS, Gulp, JavaScript и т.д.",
    
    "April 2022 - August 2022",
    "Апрель 2022 - Август 2022",

    "Education",
    "Образование",

    "Sochi State University",
    "Сочинский Государственный Университет",

    "Engineering expertise and property management. Engineer qualification",
    "Экспертиза и управление недвижимостью. Квалификация инженера",

    "September 2003 - August 2008",
    "Сентябрь 2003 - Август 2008",

    "Refresher courses",
    "Курсы повышения квалификации",

    "Computer technology and programming courses (html/css/js/ts/react/redux)",
    "Программирование включительно (html/css/js/ts/react/redux)",

    "September 2021 - May 2022",
    "Сентябрь 2021 - Май 2022",  

    "Skills",
    "Навыки",

    "Technologies I work with",
    "Технологии, с которыми я работаю",

    "",
    "",
   ]

    ru.forEach((item,i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            console.log('ru:', item)
            if (item.classList.length > 1) return
            en.forEach(btn => btn.classList.remove("active"))
            ru.forEach(btn => btn.classList.add("active"))
            filtredToRu = lnData.filter((str,i) => i%2 !== 0 && str)
            ln.forEach((str, i) => str.textContent = filtredToRu[i])
        })
    })

    en.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e)
            console.log('en', item)
            if (item.classList.length > 1) return
            ru.forEach(btn => btn.classList.remove("active"))
            en.forEach(btn => btn.classList.add("active"))
            filtredToRu = lnData.filter((str,i) => i%2 === 0 && str)
            ln.forEach((str, i) => str.textContent = filtredToRu[i])
        })
    })
    

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
