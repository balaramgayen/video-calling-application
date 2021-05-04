import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './css/footer.css';

const useStyles = makeStyles((theme) => ({
    main: {
        marginBottom: 0,
        backgroundColor: 'rgb(23, 24, 27)'
    },
    text: {
        textAlign: 'center',
        color: 'white'
    },
    link: {
       color: 'blue' 
    }

}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
    <div id="main" className={classes.main}>
        <div className={classes.text}>
                    2021 © Copyright :
                    all rights reserved<br/> Design & Developed By <br/><u><a href="https://balaramgayen.blogspot.com/" target="blank" className={classes.link}>Balaram Gayen</a></u><br/>
        </div>
    </div>
    </>
  );
}