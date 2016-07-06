import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const textStyles = {
    paddingRight: '5px'
}

const iconStyles = {
    paddingLeft: 0
}

const separatorStyles = {
    margin: '0 5px 0 0'
}

const Game = (props) => (
    <div>
        <Toolbar>
            <ToolbarGroup firstChild={true}>
                <RaisedButton icon={<FontIcon className="fa fa-pause" />} primary={true}/>
            </ToolbarGroup>
            <ToolbarGroup lastChild={true}>
                <FontIcon style={iconStyles} className="fa fa-bomb"/>
                <ToolbarTitle style={textStyles} text={3 + "/" + 10}/>
                <ToolbarSeparator style={separatorStyles}/>
                <FontIcon style={iconStyles} className="fa fa-clock-o"/>
                <ToolbarTitle style={textStyles} text={ 123}/>
            </ToolbarGroup>
        </Toolbar>
        <div className="board-container">
            <div className="center-helper">
                <div className="board"></div>
            </div>
        </div>
    </div>
)

export default Game;