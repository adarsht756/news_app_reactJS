import React, {Component} from "react";
import Newscard from "./Newscard";

class Newspart extends Component {
    render() {
        // const {articles} = this.props.articles;
        let count = 0;
        return this.props.articles.map((article) => (
                <Newscard key={count++} article={article}/>
        ))
    }
}

export default Newspart;