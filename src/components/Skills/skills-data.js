import React from 'react';
import { 
    faJs, 
    faNodeJs, 
    faPython, 
    faReact, 
    faPhp, 
    faDrupal,
    faSass,
    faBootstrap

} from '@fortawesome/free-brands-svg-icons';

const skillsData = [
    {
        name: 'Javascript', 
        icon: 'faJs',
        key: 1
    },
    {
        name: 'React', 
        icon: {faReact},
        key: 2
    },
    {
        name: 'NodeJS', 
        icon: {faNodeJs},
        key: 3
    },
    {
        name: 'Python', 
        icon: {faPython},
        key: 4
    },
    {
        name: 'PHP', 
        icon: {faPhp},
        key: 5
    },
    {
        name: 'Drupal', 
        icon: {faDrupal},
        key: 6
    },
    {
        name: 'SASS and SCSS', 
        icon: {faSass},
        key: 7
    },
    {
        name: 'Bootstrap', 
        icon: {faBootstrap},
        key: 8
    },
]

export default skillsData;