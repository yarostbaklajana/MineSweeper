import {withRouter} from 'react-router';
import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';

class Main extends Component {
    constructor(props) {
        super(props);

        this.openGame = this.openGame.bind(this);
        this.beginNewGame = this.beginNewGame.bind(this);
        this.openAbout = this.openAbout.bind(this);
    }


    openGame() {
        this.props.router.push('/MineSweeper/game')
    }

    beginNewGame() {
        this.props.router.push('/MineSweeper/setup')
    }

    openAbout() {
        this.props.router.push('/MineSweeper/about')
    }

    render() {
        return <div class="page">
            <div class="center-helper">
                <div>
                    <div className="logo">
                        <img src="images/minesweeper-logo.png"/>
                    </div>
                    <Paper className="menu" zDepth={3} rounded={false}>
                        <List>
                            <ListItem
                                primaryText="Continue"
                                secondaryText="Go from where you stopped"
                                leftIcon={<FontIcon className="fa fa-play" />}
                                onTouchTap={this.openGame}
                            />
                            <ListItem
                                primaryText="New Game"
                                secondaryText="Start the journey"
                                leftIcon={<FontIcon className="fa fa-gamepad" />}
                                onTouchTap={this.beginNewGame}
                            />
                            <ListItem
                                primaryText="About"
                                secondaryText="Who created this?"
                                leftIcon={<FontIcon className="fa fa-info" />}
                                onTouchTap={this.openAbout}
                            />
                        </List>
                    </Paper>
                </div>
            </div>
        </div>
    }
}

export default withRouter(Main);