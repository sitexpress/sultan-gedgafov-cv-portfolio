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

    "Development of multi-platform websites. HTML, CSS, SCSS, Gulp, JavaScript, etc.",
    "Разработка мультиплатформенных сайтов. HTML, CSS, SCSS, Gulp, JavaScript и т.д.",
    
    "April 2022 - August 2022",
    "Апрель 2022 - Август 2022",


    
    "Manager",
    "Менеджер",

    "SELF-EMPLOYED (QUESTROOM)",
    "Самозанятый (QUESTROOM)",

    "Control of all aspects of small business, management, customer acquisition, construction, multi-platform website creation, SEO management and optimization, organization events.",
    "Контроль всех аспектов малого бизнеса, управление, привлечение клиентов, строительство, создания мультиплатформенного веб-сайта, управления SEO и оптимизация, организация мероприятий",

    "April 2015 - April 2022",
    "Апрель 2015 - Апрель 2022",



    "PROJECT MANAGER AT OLYMPICS SOCHI 2014",
    "Менеджер проектов на Олимпийских играх в Сочи 2014",

    "Monitoring of temporary buildings and infrastructures, control of the installation of tents, modules and temporary infrastructure systems at Olympic venues, such as Main Media Center (MMC) and Mountain Olympic Village (MOV). Monitoring compliance with schedules.  ",
    "Мониторинг временных зданий и инфраструктур, контроль установки палаток, модулей и систем временной инфраструктуры на олимпийских объектах, таких как Главный Медиа Центр (MMC) и Горная олимпийская деревня (МОВ). Контроль соблюдения графиков.",

    "October 2013 - April 2014",
    "Октябрь 2013 - Апрель 2014",



    "Lead Engineer",
    "Ведущий инженер",

    "Volgomost",
    "АО Волгомост",

    "Control of delivery of all structures to sites. Control of drawings. Control production work. Oversaw the construction of a bridge across the Sochi River. Supervised construction of several bridges on the M4-Don Sochi-Krasnodar highway.",
    "Контроль доставки всех конструкций на объекты. Контроль чертежей. Контроль производственных работ. Курировал строительство моста через реку Сочи. Курировал строительство нескольких мостов на трассе М4-Дон Сочи-Краснодар.",

    "November 2012 - October 2013",
    "Ноябрь 2013 - Октябрь 2014",



    "Foreman",
    "Производитель работ",

    "LLC Svatstroy",
    "ООО Сватстрой",

    "Project management and work execution at one of the sites.",
    "Управление проектом и производством работ на одном из участков.",

    "April 2010 - November 2012",
    "Апрель 2010 - Ноябрь 2012",



    "Draftsman",
    "Инженер ПТО",

    "ARKO",
    "АРКО",

    "Creation of sketches, plans, drawings, etc. in the building company.",
    "Создание эскизов, планов, чертежей и т.д. в Строительной компании.",

    "March 2007 - April 2010",
    "Март 2007 - Апрель 2010",



    "Education",
    "Образование",

    "Sochi State University",
    "Сочинский Государственный Университет",

    "Engineering expertise and property management. Engineer qualification",
    "Экспертиза и управление недвижимостью. Квалификация инженера",

    "September 2003 - August 2008",
    "Сентябрь 2003 - Август 2008",

    "Refresher courses",
    "IT-Incubator Курсы повышения квалификации",

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
