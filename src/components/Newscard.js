import React, {Component} from "react";
import NewsImage from "./NewsImage";

class Newscard extends Component {
    render() {
        return (
            <a href={this.props.article.url}
               className="w-auto pb-5 bg-white hover:shadow-2xl duration-700">
                <NewsImage src={this.props.article.urlToImage}/>
                <div className="h-auto mb-5 mt-2 md:h-16 px-3">
                    <h1 className="text-lg">{this.props.article.title}</h1>
                </div>
                <p className="text-sm px-2 my-2 tracking-tight font-semibold">{this.props.article.description}</p>
            </a>
        )
    }
}

export default Newscard;
