import React from "react";

import ava from './assets/images/my_main_photo.jpg'

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
                id:0,
                skillName: 'React',
                description: 'Описание React навыка',
                srcLogo: 'https://www.pngkey.com/png/detail/222-2224712_react-react-logo-png.png'
            },
            {
                id:1,
                skillName: 'HTML5',
                description: 'Описание HTML5 навыка',
                srcLogo: 'https://static.tildacdn.com/tild6632-3133-4338-a162-356131643864/59f0515c722dc8122853.png'
            },
            {id:2,skillName: 'CSS3', description: 'Описание CSS3 навыка', srcLogo: 'https://upread.ru/img/art488-1.png'}
        ]
    },
    projectsBlock: {
        titleName: 'My Works',
        buttonName: 'Cмотреть',
        projectItems: [
            {
                id:1,
                projectName: 'Project1',
                description: 'Описание Project1',
                srcImgProject: 'https://avatars.mds.yandex.net/get-altay/247136/2a0000015b861c38531a35339a249d869579/XXL'
            },
            {
                id:2,
                projectName: 'Project2',
                description: 'Описание Project2',
                srcImgProject: 'https://avatars.mds.yandex.net/get-altay/247136/2a0000015b861c38531a35339a249d869579/XXL'
            },
            {
                id:3,
                projectName: 'Project3',
                description: 'Описание Project3',
                srcImgProject: 'https://avatars.mds.yandex.net/get-altay/247136/2a0000015b861c38531a35339a249d869579/XXL'
            },
            {
                id:4,
                projectName: 'Project4',
                description: 'Описание Project4',
                srcImgProject: 'https://avatars.mds.yandex.net/get-altay/247136/2a0000015b861c38531a35339a249d869579/XXL'
            },

        ]
    },
    sloganBlock: {
        titleName: 'Рассматриваю вариант удаленной работы',
        buttonName: 'Нанять меня',
    },
    contactBlock: {
        titleName: 'Contact Me',
        buttonName: 'Send Message',
    },
    footerBlock: {
        titleName: 'Туз Дмитрий',
        copyrightText: '© 2020, All Rights Reserved',
        socialContacts: [
            {id: '1', urladress: 'vk.com', srcLogo: 'https://toy-boy.ru/images/vkontakte.png', altText:'VK'},
            {id: '2', urladress: 'facebook.com', srcLogo: 'https://toy-boy.ru/images/vkontakte.png', altText:'FaceBook'},
            {id: '3', urladress: 'linkedin.com', srcLogo: 'https://www.clipartmax.com/png/full/62-624588_linkedin-help-linkedin-logo-2018-png.png', altText:'Linkedin'},
        ]
    },
}
export default state