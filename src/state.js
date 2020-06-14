import ava from './assets/images/my_main_photo.jpg'


import htmlIco from './assets/images/html.png'
import cssIco from './assets/images/css.png'
import reactIco from './assets/images/react.png'
import reduxIco from './assets/images/redux.png'
import jsIco from './assets/images/js.png'
import typescriptIco from './assets/images/typescript.png'

import proj1 from './assets/images/project_1.jpg'
import proj2 from './assets/images/project_2.jpg'
import proj3 from './assets/images/project_3.jpg'
import proj4 from './assets/images/project_4.jpg'

import vk from './assets/images/socials/vk.png'
import google from './assets/images/socials/google.png'
import In from './assets/images/socials/linkedin.png'
import telegtam from './assets/images/socials/telegram.png'
import viber from './assets/images/socials/viber.png'

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
                description: 'class & function components, life cycle methods, HOC, HOOK, axios, ref',
                srcLogo: reactIco
            },
            {
                id: 1,
                skillName: 'Redux',
                description: 'combineReducers, reducer, dispatch, action, provider, connect, react-router-dom, redux-thunk;',
                srcLogo: reduxIco
            },
            {
                id: 2,
                skillName: 'TypeScript',
                description: 'typing props, creating Interfaces/Types, generics;',
                srcLogo: typescriptIco
            },
            {
                id: 3,
                skillName: 'HTML',
                description: 'tags, atributes, forms',
                srcLogo: htmlIco
            },
            {
                id: 4,
                skillName: 'CSS',
                description: 'flex, grid, media queries, animation',
                srcLogo: cssIco
            },
            {
                id: 5,
                skillName: 'JS',
                description: 'es5 / es6; Arrow functions, array methods, spread, destructuring, promise, pure function, localStorage;',
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
            {
                id: '1',
                urladress: 'https://vk.com/',
                srcLogo: vk,
                altText: 'VK'
            },
            {
                id: '2',
                urladress: 'linkedin.com',
                srcLogo: In,
                altText: 'Linkedin'
            },
            {
                id: '3',
                urladress: 'viber.com',
                srcLogo: viber,
                altText: 'viber'
            },
            {
                id: '4',
                urladress: 'telegram.com',
                srcLogo: telegtam,
                altText: 'telegtam'
            },
            {
                id: '5',
                urladress: 'google.com',
                srcLogo: google,
                altText: 'google'
            },
        ]
    },
}


export default state