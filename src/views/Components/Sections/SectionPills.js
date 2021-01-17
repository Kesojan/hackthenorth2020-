import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Quote from "components/Typography/Quote.js";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import img from "assets/img/undraw_stepping_up_g6oo.png"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h1>Why BubbleBuy?</h1>
          </div>
          <div className={classes.title}>
            <h3>
              <h4>You no longer need to spend hours researching the local business that sells exactly what you need. You have BubblyBuy!"</h4>
            </h3>
          </div>
          <GridContainer>
            <GridItem>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Community Impact",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <h3>
                        You get what you want to buy through BubbleBuy and have the opportunity to increase job stability for nearby business owners. 
                        </h3>
                        <h3>
                        Every dollar you spend goes directly towards financially supporting each business owner.
                         Not only that, but local shops often provide more sustainable shopping alternatives and will always aim to create a great experience for you!
                        </h3>
                        <br />
                      </span>
                    )
                  },
                  {
                    tabButton: "Economic Impact",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <h3>
                        98.2% of all Canadian companies are small businesses. 
                        These companies provide 97.9% of all employed individuals an income, a new opportunity. 
                        However, due to COVID-19, 73% of businesses have experienced a negative economic downfall. T
                        his downfall has a ripple effect on the overall Canadian economy. 
                        With over 30% of Canada’s GDP reliant on small businesses, there is a pressing need to act fast, to shop local.
                        
                        </h3>
                        <br />
                        <h3>
                        BubbleBuy makes this process simple and easy for you!
                        </h3>
                      </span>
                    )
                  },
                  {
                    tabButton: "Shop with Ease",
                    tabIcon: List,
                    tabContent: (
                      <span>
                        <h3>
                        Great User Experience
You no longer need to spend hours researching local shops and visiting countless websites to find what you need. 
With one click of a button, you can see all the nearby small businesses that sell exactly what you want.
                        </h3>
                        <br />
                   
                      </span>
                    )
                  }
                ]}
              />
                <img src={img} height="550" width="650" align = "center"/>
            </GridItem>
            <GridItem>
          
            </GridItem>
            
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
