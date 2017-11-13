import React, {Component} from "react";
import "../style/NewObjects.css";

export class OneFile extends Component {
    constructor(props) {
        super(props);
        this.keyData = props.keyData;
        this.history = props.history;
    }

    show = (event) => {
        event.preventDefault();
        this.props.history.push({
            pathname: '/firstpage/file/newfile',
            state: {
                fileTitle: this.keyData,
                flag: true
            }
        });
    };

    render() {
        return (
            <div className="newobjects">
                <button className="newobjects-link" onClick={this.show}>
                    <div className="newobjects_button_style">
                        <h1>{this.keyData}</h1>
                    </div>
                </button>
            </div>
        );
    }
}

export default OneFile;