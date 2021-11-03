import React from 'react'
// Components
import FadeInSection from '../FadeInSection'
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
    padding-top: 7rem;
    padding-bottom: 7rem;
    `,
    pic: css`
    display: flex;
    justify-content: flex-end;
    `,
    icons: css`
    font-size: 45px;
    `,
    resume: css`
    font-size: 18px;
    line-height: 1.8;
    margin-left: 4.6rem;
    padding-top: 0;
    padding-bottom: 0;
    `,
}

export default function AboutMe() {
    const handleResumeBtn = event => {
        window.open(
            `https://docs.google.com/document/d/14tQljuyZufhgLDpHjVz9Lp3D3-OV7fbjQKA-8Inv-KM/edit?usp=sharing`,
            '_blank').focus()
    }

    const handleLIBtn = event => {
        window.open('https://www.linkedin.com/in/jsk321/', '_blank').focus()
    }

    const handleGHBtn = event => {
        window.open('https://github.com/JSK321', '_blank').focus()
    }

    return (
        <FadeInSection>
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


                            <Button
                                variant="text"
                                sx={styles.resume}
                                onClick={handleResumeBtn}
                            >
                                Check out my resume
                            </Button>


                            <Box className="iconBtns">
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
                            <Box>
                                <Typography
                                    variant="p"
                                    component="p"
                                    className="contact"
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
                                    Phone: (253)-292-7744
                                </Typography>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </FadeInSection>
    )
}
