import { Link, Paper } from '@material-ui/core';
import React from 'react';
import Markdown from 'react-markdown'

class AboutComponent extends Component {
    constructor(){
        super();

        this.state = {
            readme: ""
        }
    }

    render() {
        return (
            <Paper>
                <Link href="https://github.com/longway34/Poster_auto_sappliers_server/blob/master/README.md" 
                target="_blank" 
                rel="noreferrer"
                title="Об этом проекте" >
                </Link>
            </Paper>
                
        );
    }
}

export default AboutComponent;