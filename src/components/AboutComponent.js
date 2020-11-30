import { Card, CardContent } from '@material-ui/core';
import React, {Component} from 'react';
import Markdown from 'react-markdown'
import MySpinner from './MySpinner';

class AboutComponent extends Component {
    constructor(props){
        super(props);

    }

    render() {
        let res = (!this.props.isLoading && this.props.readme) ? <Markdown source={this.props.readme} /> : null;

        return (
            <Card>
		        <MySpinner hidden={this.props.isWaiting ? !this.props.isWaiting : true} x={"50vw"} y={"50vh"} />
                <CardContent>
                    {res}
                </CardContent>
            </Card>
                
        );
    }
}

export default AboutComponent;