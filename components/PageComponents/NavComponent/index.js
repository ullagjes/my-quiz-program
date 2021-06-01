import React from 'react';

import Link from 'next/link';

import Box from '@material-ui/core/Box';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import { useStyles } from './styles';
import { LinkComponent } from '../../BaseComponents';

function NavComponent({ user }) {
    
    const classes = useStyles();
    return (
        <Box 
            className={classes.header} 
            boxShadow={3}
            height="15%"
            minHeight='70px'
            maxHeight='100px'
            component="header"
            >
                <Link href={user ? "/quizmaster" : "/"}>
                    <a className={classes.iconContainer}>
                        <QuestionAnswerIcon className={classes.icon}/>
                        <p className={classes.logo} aria-label="hidden">K!</p>  
                    </a>
                </Link>
                {user && 
                <nav className={classes.navigationContainer}>
                    <LinkComponent classes={classes.navLink} href={`/createquiz`}>Create</LinkComponent>
                    <LinkComponent classes={classes.navLink} href={`/quizmaster/library`}>Library</LinkComponent>
                    <LinkComponent classes={classes.navLink} href={`/quizmaster/profile`}>Profile</LinkComponent>
                </nav>
                }
            </Box>
    );
}

export default NavComponent;