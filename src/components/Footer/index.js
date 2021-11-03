import React from 'react'
// Components
import FadeInSection from '../FadeInSection'
// React Scroll
import { Link } from 'react-scroll'
// MUI
import { Box, Typography, IconButton, Tooltip } from '@mui/material'
// styles
import { css } from '@emotion/react'
// MUI Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'


const styles = {
    footer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7rem;
    padding-bottom: 0;
    `,
    icons: css`
    font-size: 45px;
    `,
    contactTitle: css`
    padding: 1.5rem;
    color: #737373;
    `,
    copyright: css`
    padding: 4rem;
    `,
    arrowUp: css`
    margin: 4rem;
    `,
    email: css`
    color: #A6A6A6;
    `,
}

export default function Footer() {
    const handleLIBtn = event => {
        window.open('https://www.linkedin.com/in/jsk321/', '_blank').focus()
    }

    const handleGHBtn = event => {
        window.open('https://github.com/JSK321', '_blank').focus()
    }

    return (
        <FadeInSection>
            <Box sx={styles.footer}>
                <Box>
                    <IconButton
                        color="primary"
                        onClick={handleLIBtn}
                    >
                        <LinkedInIcon
                            sx={styles.icons}
                        />
                    </IconButton>
                    <IconButton
                        color="primary"
                        onClick={handleGHBtn}
                    >
                        <GitHubIcon
                            sx={styles.icons}
                        />
                    </IconButton>
                </Box>
                <Typography
                    variant="h4"
                    component="div"
                    sx={styles.contactTitle}
                >
                    Contact Me
                </Typography>
                <Typography
                    variant="h5"
                    component="div"
                    sx={styles.email}
                >
                    jaeshinkim321@gmail.com
                </Typography>
                <Link
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <Tooltip title="Return to top" arrow>
                        <IconButton sx={styles.arrowUp}>
                            <ArrowUpwardIcon 
                                style={{color:'#A6A6A6'}}
                            />
                        </IconButton>
                    </Tooltip>
                </Link>
            </Box>
        </FadeInSection>
    )
}
