import React from 'react'
// MUI
import { Box, Typography, IconButton } from '@mui/material'
// styles
import { css } from '@emotion/react'
// MUI Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'


const styles = {
    footer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7rem;
    `,
    icons: css`
    font-size: 45px;
    `,
    contactTitle: css`
    padding: 1.5rem;
    `,
    copyright: css`
    padding: 4rem;
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
            >
                jaeshinkim321@gmail.com
            </Typography>
        </Box>
    )
}
