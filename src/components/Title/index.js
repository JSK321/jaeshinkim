import React from 'react'
// MUI
import { Box, Typography } from '@mui/material'
// styles
import { css } from '@emotion/react'
// react swipeable views
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
  title: css`
    border: 1px solid pink;
    margin-top: 10rem;
    display: block;
    text-align: center;
  `,
  greetings: css`
    opacity: 0.5;
    font-size: 24px;
    letter-spacing: 4px;
    user-select: none;
  `,
  name: css`
    letter-spacing: 4px;
    margin-top: 1rem;
    font-weight: bold;
    user-select: none;
  `,
}

export default function Title() {
  return (
    <Box sx={styles.title}>
      <AutoPlaySwipeableViews
        interval={4000}
        enableMouseEvents={true}
      >
        <div>
          <Typography
            variant="p"
            component="p"
            sx={styles.greetings}
          >
            HELLO! I'M
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            sx={styles.name}
          >
            JAE KIM
          </Typography>
        </div>
        <div>
          <Typography
            variant="p"
            component="p"
            sx={styles.greetings}
          >
            I'M A FULL STACK
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            sx={styles.name}
          >
            WEB DEVELOPER
          </Typography>
        </div>
      </AutoPlaySwipeableViews>
    </Box>
  )
}
