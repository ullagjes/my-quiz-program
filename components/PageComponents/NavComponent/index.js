import React, { useState } from 'react';

import Link from 'next/link';

import {
    Backdrop,
    Box, 
    Button, 
    IconButton, 
    useMediaQuery
} from '@material-ui/core';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './styles';
import { LinkComponent } from '../../BaseComponents';

//RENDERS NAVIGATION MENU IN ALL PAGES WHERE THERE IS USER-CONTEXT. 
//WILL CHANGE ACCORDING TO SCREENSIZE.
function NavComponent({ user }) {
    const classes = useStyles();
    const smallScreen = useMediaQuery(`(max-width:600px)`)
    const [toggle, setToggle] = useState(false);

    function handleClick(){
        setToggle(!toggle)
    }

    function NavigationLinks(){
        return(
            <>
                <LinkComponent 
                classes={smallScreen ? `${classes.navLink} + ${classes.navLinkMobile}` : classes.navLink} 
                href={`/createquiz`}>
                    CREATE
                </LinkComponent>
                <LinkComponent 
                classes={smallScreen ? `${classes.navLink} + ${classes.navLinkMobile}` : classes.navLink} 
                href={`/quizmaster/library`}>
                    LIBRARY
                </LinkComponent>
                <LinkComponent 
                classes={smallScreen ? `${classes.navLink} + ${classes.navLinkMobile}` : classes.navLink} 
                href={`/quizmaster/profile`}>
                    PROFILE
                </LinkComponent>
            </>
            )
    }

    function MenuComponent(){
        return(
            <>
            {smallScreen ? 
            <>
                <Button 
                className={`${classes.mobileNavigationButton} + ${classes.navigationContainer}`}
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleClick}
                >
                    Menu
                </Button> 
                {toggle && 
                <Backdrop open={toggle} onClick={handleClick}>
                    <nav className={classes.mobileNavigation}>
                        <IconButton 
                        className={classes.closeIconContainer} 
                        aria-label="close menu" 
                        onClick={handleClick}>
                            <CloseIcon className={classes.closeIcon}/>
                        </IconButton>
                        <NavigationLinks />
                    </nav>
                </Backdrop>
                }
            </>
            : 
            <nav className={classes.navigationContainer}>
                <NavigationLinks />
            </nav>
            }
            </>
        )
    }

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
                {user && <MenuComponent />}
            </Box>
    );
}

export default NavComponent;