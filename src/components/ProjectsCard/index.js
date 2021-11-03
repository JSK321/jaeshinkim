import React from 'react'
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
    `,
    cardBox2: css`
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    `,
    cardPicDiv: css`
    width: 425px;
    `,
    cardDiv: css`
    width: 425px;
    height: 350px;
    margin-top: 3rem;
    margin-left: 3rem;
    margin-right: 3rem;
    `,
    cardTitle: css`
    font-weight: bold;
    `,
    cardBtns: css`
    margin-top: 1rem;
    `,
    projectPic: css`
    width: 425px;    
    height: 450px;
    `,
    iconButtons: css`
    margin-left: 1rem;
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
    )
}
