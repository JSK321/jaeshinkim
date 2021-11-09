import React from 'react'
// Project json
import Projects from '../../projects.json'
// Components
import FadeInSection from '../FadeInSection'
import ProjectsCard from '../ProjectsCard'
// MUI
import { Container, Typography } from '@mui/material'
// styles
import { css } from '@emotion/react'

const styles = {
    title: css`
    font-weight: bold;
    letter-spacing: 4px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    color: #737373;
    @media (max-width: 300px) {
        font-size: 40px;
    }
    `,
    secondaryTitle: css`
    letter-spacing: 4px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
    opacity: 0.5;
    color: #A6A6A6;
    `,
    portfolioBox: css`
    display: block;
    padding: 7rem;
    @media (max-width: 450px) {
        padding: 0;
    }
    `,
}

const portfolio = Projects

export default function Portfolio() {
    return (
        <FadeInSection>
            <Container sx={styles.portfolioBox}>
                <Typography
                    variant="h6"
                    component="h6"
                    sx={styles.secondaryTitle}
                >
                    CHECK MY WORK
                </Typography>
                <Typography
                    variant="h3"
                    component="h3"
                    sx={styles.title}
                >
                    PORTFOLIO
                </Typography>
                {portfolio.map((projectObj) => (
                    <ProjectsCard
                        key={projectObj.id}
                        id={projectObj.id}
                        name={projectObj.name}
                        image={projectObj.image}
                        github={projectObj.github}
                        link={projectObj.link}
                        description={projectObj.description}
                        technologies={projectObj.technologies}
                    />
                ))}
            </Container>
        </FadeInSection>
    )
}
