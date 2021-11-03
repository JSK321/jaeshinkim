import React from 'react'
// React Scroll
import { Link } from 'react-scroll'
// MUI Components
import {
    Menu,
    MenuList,
    MenuItem,
    Typography,
} from '@mui/material'
// styles
import { css } from '@emotion/react'
import './styles.css'

const styles = {
    menuBox: css`   
    width: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #737373;
    color: #0D0D0D
    `,
    menuItem: css`
    font-size: 12.5px;
    text-decoration: underline;
    text-underline-offset: 0.25em;
    padding-right: 0.5rem;
    opacity: 0.5;
    color: snow;
    `,
}

export default function MenuNav(props) {
    return (
        <Menu
            id="basic-menu"
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={props.handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuList sx={styles.menuBox}>
                <MenuItem onClick={props.handleClose}>
                    <Link
                        activeClass="active"
                        to="aboutMe"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={props.handleClose}
                        className="scrollItem"
                    >
                        <Typography
                            variant="p"
                            component="p"
                            sx={styles.menuItem}
                        >
                            01
                        </Typography>
                        About
                    </Link>
                </MenuItem>
                <MenuItem onClick={props.handleClose}>
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={props.handleClose}
                        className="scrollItem"
                    >
                        <Typography
                            variant="p"
                            component="p"
                            sx={styles.menuItem}
                        >
                            02
                        </Typography>
                        Skills
                    </Link>
                </MenuItem>
                <MenuItem onClick={props.handleClose}>
                    <Link
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={props.handleClose}
                        className="scrollItem"
                    >
                        <Typography
                            variant="p"
                            component="p"
                            sx={styles.menuItem}
                        >
                            03
                        </Typography>
                        Portfolio
                    </Link>
                </MenuItem>
                <MenuItem onClick={props.handleClose}>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={props.handleClose}
                        className="scrollItem"
                    >
                        <Typography
                            variant="p"
                            component="p"
                            sx={styles.menuItem}
                        >
                            04
                        </Typography>
                        Contact
                    </Link>
                </MenuItem>
            </MenuList>
        </Menu >
    )
}
