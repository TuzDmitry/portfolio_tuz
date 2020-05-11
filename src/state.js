
import ava from './assets/images/my_main_photo.jpg'


import htmlIco from './assets/images/html.png'
import cssIco from './assets/images/css.png'
import reactIco from './assets/images/react.png'
import jsIco from './assets/images/js.png'

import proj1 from './assets/images/project_1.jpg'
import proj2 from './assets/images/project_2.jpg'
import proj3 from './assets/images/project_3.jpg'
import proj4 from './assets/images/project_4.jpg'

let state = {
    headerBlock: {
        navLinks: [
            {id: 'main', title: 'Главная'},
            {id: 'skills', title: 'Скиллы'},
            {id: 'projects', title: 'Работы'},
            {id: 'contacts', title: 'Контакты'}
        ]
    },
    mainBlock: {
        info: {
            myName: 'Dmitry Tuz',
            description: 'Я React разработчик',
            srcPhoto: ava
        },
    },
    skillsBlock: {
        titleName: 'My Skills',
        skillItems: [
            {
                id: 0,
                skillName: 'React',
                description: 'Описание React навыка',
                srcLogo: reactIco
            },
            {
                id: 1,
                skillName: 'HTML',
                description: 'Описание HTML навыка',
                srcLogo: htmlIco
            },
            {
                id: 2,
                skillName: 'CSS',
                description: 'Описание CSS навыка',
                srcLogo: cssIco
            },
            {
                id: 3,
                skillName: 'JS',
                description: 'Описание JS навыка',
                srcLogo: jsIco
            }
        ]
    },
    projectsBlock: {
        titleName: 'My Works',
        button: {
            buttonName: 'Cмотреть',
            buttonClass: 'btnProject'
        },
        projectItems: [
            {
                id: 1,
                projectName: 'Social Network',
                description: 'Описание Social Network',
                srcImgProject: proj1
            },
            {
                id: 2,
                projectName: 'ToDo List',
                description: 'ToDo List',
                srcImgProject: proj2
            },
            {
                id: 3,
                projectName: 'Catch me if you can',
                description: 'Описание Catch me if you can',
                srcImgProject: proj3
            },
            {
                id: 4,
                projectName: 'Counter',
                description: 'Описание Counter',
                srcImgProject: proj4
            },
        ]
    },
    sloganBlock: {
        titleName: 'Рассматриваю вариант удаленной работы',
        button: {
            buttonName: 'Нанять меня',
            buttonClass: 'btnBlock'
        }
    },
    contactBlock: {
        titleName: 'Contact Me',
        button: {
            buttonName: 'Send Message',
            buttonClass: 'btnBlock'
        }
    },
    footerBlock: {
        titleName: 'Туз Дмитрий',
        copyrightText: '© 2020, All Rights Reserved',
        socialContacts: [
            {id: '1', urladress: 'vk.com', srcLogo: 'https://toy-boy.ru/images/vkontakte.png', altText: 'VK'},
            {
                id: '2',
                urladress: 'facebook.com',
                srcLogo: 'https://toy-boy.ru/images/vkontakte.png',
                altText: 'FaceBook'
            },
            {
                id: '3',
                urladress: 'linkedin.com',
                srcLogo: 'https://www.clipartmax.com/png/full/62-624588_linkedin-help-linkedin-logo-2018-png.png',
                altText: 'Linkedin'
            },
        ]
    },
}


export default state