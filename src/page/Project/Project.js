import React from 'react';
import projectSvg from '../../images/svg/project.svg'
import ProjectDetails from './ProjectDetails';

const projectsData = [
    {
        _id: 1,
        title: 'Jersey Shop',
        img: 'https://i.ibb.co/qNmYMLV/Screenshot-2021-07-04-213303.png',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sint, possimus ullam ducimus doloribus laborum nesciunt fuga pariatur culpa dignissimos?',
        technology: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sint, possimus ullam',
        liveSite: 'link',
        clientCode: 'client Site',
        serverCode: ''
    },
    {
        _id: 2,
        title: 'Jersey Shop',
        img: 'https://i.ibb.co/qNmYMLV/Screenshot-2021-07-04-213303.png',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sint, possimus ullam ducimus doloribus laborum nesciunt fuga pariatur culpa dignissimos?',
        technology: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sint, possimus ullam',
        liveSite: 'link',
        clientCode: 'client Site',
        serverCode: 'server Site'
    },
    {
        _id: 3,
        title: 'Jersey Shop',
        img: 'https://i.ibb.co/qNmYMLV/Screenshot-2021-07-04-213303.png',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sint, possimus ullam ducimus doloribus laborum nesciunt fuga pariatur culpa dignissimos?',
        technology: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sint, possimus ullam',
        liveSite: 'link',
        clientCode: 'client Site',
        serverCode: 'server Site'
    }
];

console.log(projectsData)
const Project = () => {
    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center mt-5 pb-2 border-bottom border-info border-5 text-info">My Resent Project</h2>
            <div className="text-center">
                <img className="w-50" src={projectSvg} alt="" />
            </div>
            <div className="row">
                {
                    projectsData.map(project => <ProjectDetails key={project._id} project={project}></ProjectDetails>)
                }
            </div>
        </div>
    );
};

export default Project;