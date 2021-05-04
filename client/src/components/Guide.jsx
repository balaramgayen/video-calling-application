import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Accordion, AccordionSummary, AccordionDetails, Typography, } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Guide() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Quick Using Guide</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          First, enter your name then copy your id by clicking the COPY YOUR ID button then send this id to your friend and tell him to enter this id and to click on the CALL button to call you,  after that  You will receive a calling notification, received it.<br/> Otherwise tell your friend to enter your friend's name and Copy id then tell him to send you and after that enter this id then press the CALL button to make video call
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
