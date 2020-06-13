import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Newspart from "./components/Newspart";
import Filters from "./components/Filters";
import "./assets/output.css";
// import "./assets/styles.css";

import axios from "axios";

class App extends Component {
    state = {
        articles: [],
        atTop: true
    };
    filterCategory = (category, country) => {
        axios.get('https://newsapi.org/v2/top-headlines?country=' + country + '&category='
            + category + '&apiKey=17feb5fabef34a33832fb609b8dd3c6e')
            .then((res) => {
                this.setState({
                    articles: res.data.articles
                })
            })
    }
    handleScroll = () => {
        if (window.scrollY > 63.20000076293945) {
            this.setState({atTop: this.state.atTop = false})
        } else this.setState({atTop: this.state.atTop = true})
    }
    getStyleFilters = () => {
        return {
            position: this.state.atTop ? 'static' : 'fixed',
            top: this.state.atTop ? 'auto' : '0'
        }
    }
    getNewsPart = () => {
        return {
            marginTop: this.state.atTop ? '0' : '87px'
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidMount() {
        axios
            .get(
                'https://newsapi.org/v2/top-headlines?country=in&apiKey=17feb5fabef34a33832fb609b8dd3c6e'
            )
            .then((res) => {
                this.setState({
                    articles: res.data.articles,
                });
            });
    }

    render() {
        return (
            <div className="App bg-black">
                <Navbar/>
                <div style={this.getStyleFilters()} className="w-full">
                    <Filters filterCategory={this.filterCategory}/>
                </div>
                <div style={this.getNewsPart()}
                     className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 md:px-32 bg-gray-200 py-10">
                    <Newspart articles={this.state.articles}/>
                </div>
            </div>
        );
    }
}

export default App;
