import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// Modal
import TextField from "@material-ui/core/TextField";
import img2 from "assets/img/olives-and-grace.jpg"
import img3 from "assets/img/37b2a2aa-10f9-483c-a405-fd5993776d09-large16x9_Image.jpeg"
import img4 from "assets/img/images-2.jpeg"
import img5 from "assets/img/-methode-times-prodmigration-web-bin-1432258c-cd01-3730-a1ae-859a4c91e1fc.jpg"
import img6 from "assets/img/1*nB8_DAL8WSnhDXMAs4jiqg.jpeg"
import img7 from "assets/img/IMG_3703-scaled-e1582740694450.jpeg"
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
// core components

// core components
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);
const tileData = [
  {
    img: img2,
    title: "Andy's Shop",
    author: "Toronto, ON",
  },
  {
    img: img3,
    title: "Royal Jewelery",
    author: "Toronto, ON",
  },
  {
    img: img4,
    title: "Ben's Shop",
    author: "Toronto, ON",
  },
  {
    img: img6,
    title: "Mark's Company",
    author: "Toronto, ON",
  },
  {
    img: img5,
    title: "Antique",
    author: "Toronto, ON",
  },
  {
    img: img7,
    title: "Botique",
    author: "Toronto, ON",
  },
];

export default function SectionTypography() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [classicModal, setClassicModal] = React.useState(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  return (
    <div className={classes.container}>
      <div id="typography">
      
        <div className={classes.title}>
          <br></br>
          <h1 align="center">Our Philosophy </h1>
        
        <h2 align="center">Retailers Near You</h2>
        

        </div>

        <div></div>
        <div className={classes.section}>
          <div className={classes.root}>
            <GridList cellHeight={500} className={classes.gridList}>
              
              <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
                <ListSubheader component="div">All Retailers within 10 KM proximity</ListSubheader>
              </GridListTile>
              {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />

                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                        <InfoIcon />
                        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                          Buy Options
                        </Button>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="form-dialog-title"
                        >
                          <DialogTitle id="form-dialog-title">Payment Plan's</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              Please enter the amount you wish to purchase!
                            </DialogContentText>

                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="CAD"
                              type="Integer"
                              fullWidth
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose} color="primary">
                              Cancel
                            </Button>
                            <Button onClick={handleClose} color="primary">
                              Confirm
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
    
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
