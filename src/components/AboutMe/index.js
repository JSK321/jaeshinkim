import React from 'react'
// MUI
import { Box, Grid, Typography, IconButton, Button } from '@mui/material'
// styles
import { css } from '@emotion/react'
import './styles.css'
// Profile picture
import Picture from '../../utils/Images/me.jpg'
// MUI Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const styles = {
    box: css`
    border: 1px solid pink;
    `,
    pic: css`
    display: flex;
    justify-content: flex-end;
    `,
    icons: css`
    font-size: 45px;
    `,
}

export default function AboutMe() {
    return (
        <Box sx={styles.box}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}
                    sx={styles.pic}
                >
                    <img
                        src={Picture}
                        alt="profile picture"
                        className="profilePic"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h1
                        className="aboutTitle"
                    >
                        About
                    </h1>
                    <div className="aboutMeInfo">
                        <Typography
                            variant="h4"
                            component="h4"
                            className="aboutMeName"
                        >
                            Hi! I'm Jae Kim
                        </Typography>

                        <Typography
                            variant="p"
                            component="p"
                            className="aboutMe"
                        >
                            I am a graduate of University of Washington Coding Bootcamp where I developed skills in JavaScript, React.js, Node.js, Express.js, and MySQL.
                            I still have much to learn and I am always willing to develop new traits.
                            I have worked in the service industry for many years, and it has taught me to give my best effort into a task to achieve the most satisfying result.
                        </Typography>

                        <Typography
                            variant="p"
                            component="p"
                            className="resume"
                        >
                            Check out my resume
                        </Typography>

                        <Box className="iconBtns">
                            <IconButton
                                color="primary"
                            >
                                <LinkedInIcon
                                    sx={styles.icons}
                                />
                            </IconButton>
                            <IconButton
                                color="primary"
                            >
                                <GitHubIcon
                                    sx={styles.icons}
                                />
                            </IconButton>
                        </Box>
                        <Box>
                            <Typography
                                variant="p"
                                component="p"
                                className="resume"
                            >
                                Contact me here!
                            </Typography>
                            <Typography
                                variant="p"
                                component="p"
                                className="contactInfo"
                            >
                                Email: jaeshinkim321@gmail.com
                            </Typography>
                            <Typography
                                variant="p"
                                component="p"
                                className="contactInfo"
                            >
                                Phone: (253) 292-7744
                            </Typography>
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}
