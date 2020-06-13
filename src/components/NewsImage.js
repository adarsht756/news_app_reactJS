import React, {Component} from "react";

class NewsImage extends Component {
    render() {
        return (
            <img className="mx-auto object-center" src={this.props.src} alt=""
                 style={{'width': '400px', 'height': '266px'}}/>
        );
    }
}

export default NewsImage;