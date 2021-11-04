import React from 'react'
// Components
import FadeInSection from '../FadeInSection'
// MUI
import {
    Box,
    IconButton,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Tooltip,
} from '@mui/material'
// MUI Icons
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
// styles
import { css } from '@emotion/react'

const styles = {
    cardBox1: css`
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    @media (max-width: 400px) {
        flex-direction: column;
        padding: 0;
    }
    `,
    cardBox2: css`
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 400px) {
        flex-direction: column;
        padding: 0;
    }
    `,
    cardPicDiv: css`
    width: 425px;
    @media (max-width: 400px) {
        width: 100%;
    }
    `,
    cardDiv: css`
    width: 425px;
    height: 350px;
    margin-top: 3rem;
    margin-left: 3rem;
    margin-right: 3rem;
    background-color: #0D0D0D;
    color: #A6A6A6;
    box-shadow: none;
    @media (max-width: 400px) {
        width: 100%;
        margin: 0;
        margin-bottom: 3rem;
    }
    `,
    cardTitle: css`
    font-weight: bold;
    `,
    cardBtns: css`
    margin-top: 1rem;
    @media (max-width: 400px) {
        justify-content: center;
    }
    `,
    projectPic: css`
    width: 425px;    
    height: 450px;
    @media (max-width: 400px) {
        width: 375px;
        height: 350px;
    }
    `,
    iconButtons: css`
    margin-left: 1rem;
    @media (max-width: 400px) {
        margin-left: 0;
    }
    `,
    projectDescription: css`
    color: #737373;
    font-size: 16px;
    `,
}
export default function ProjectsCard(props) {
    const handleLiveBtn = event => {
        window.open(props.link, '_blank').focus()
    }

    const handleGHBtn = event => {
        window.open(props.github, '_blank').focus()
    }

    return (
        <FadeInSection>
            <Box
                sx={props.id % 2 === 0 ? styles.cardBox1 : styles.cardBox2}
            >
                <CardActionArea sx={styles.cardPicDiv} onClick={handleLiveBtn}>
                    <Card>
                        <CardMedia
                            component="img"
                            sx={styles.projectPic}
                            image={props.image}
                            alt="project picture"
                        ></CardMedia>
                    </Card>
                </CardActionArea>
                <Card sx={styles.cardDiv}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={styles.cardTitle}
                        >
                            {props.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={styles.projectDescription}
                        >
                            {props.description}
                        </Typography>
                        <br></br>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                        >
                            Technology
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={styles.projectDescription}
                        >
                            {props.technologies}
                        </Typography>
                    </CardContent>
                    <CardActions sx={styles.cardBtns}>
                        <Tooltip title="View website" arrow>
                            <IconButton color="primary" sx={styles.iconButtons} onClick={handleLiveBtn}>
                                <WebIcon style={{ fontSize: '35px' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="View GitHub" arrow>
                            <IconButton color="primary" sx={styles.iconButtons} onClick={handleGHBtn}>
                                <GitHubIcon style={{ fontSize: '35px' }} />
                            </IconButton>
                        </Tooltip>
                    </CardActions>
                </Card>
            </Box >
        </FadeInSection>
    )
}
