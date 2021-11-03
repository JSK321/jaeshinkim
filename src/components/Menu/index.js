import React from 'react'
// MUI Components
import {
    Menu,
    MenuList,
    MenuItem,
    Typography,
} from '@mui/material'
// styles
import { css } from '@emotion/react'

const styles = {
    menuBox: css`   
    width: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `,
    menuItem: css`
    font-size: 12.5px;
    text-decoration: underline;
    text-underline-offset: 0.25em;
    padding-right: 0.5rem;
    opacity: 0.5;
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
                    <Typography
                        variant="p"
                        component="p"
                        sx={styles.menuItem}
                    >
                        01
                    </Typography>
                    About
                </MenuItem>
                <MenuItem onClick={props.handleClose}>
                    <Typography
                        variant="p"
                        component="p"
                        sx={styles.menuItem}
                    >
                        02
                    </Typography>
                    Skills
                </MenuItem>
                <MenuItem onClick={props.handleClose}>
                    <Typography
                        variant="p"
                        component="p"
                        sx={styles.menuItem}
                    >
                        03
                    </Typography>
                    Portfolio
                </MenuItem>
                <MenuItem onClick={props.handleClose}>
                    <Typography
                        variant="p"
                        component="p"
                        sx={styles.menuItem}
                    >
                        04
                    </Typography>
                    Contact
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
