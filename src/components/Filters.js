import React, {Component} from "react";

class Filters extends Component {
    filterCategory = (e) => {
        this.props.filterCategory(
            this.state.categories[document.getElementById("selCategory").selectedIndex],
            this.state.countries[document.getElementById("selCountry").selectedIndex].id
        );
    }
    state = {
        categories: ["all", "entertainment", "business", "general", "health", "science", "sports", "technology"],
        selCategory: "all",
        countries: [
            {name: "India", id: "in"}, {name: "United States of America", id: "us"}, {name: "Russia", id: "ru"},
            {name: "South Africa", id: "za"}, {name: "Venezuela", id: "ve"},
            {name: "The United Arab Emirates", id: "ae"}, {name: "Argentina", id: "ar"}, {name: "Belgium", id: "be"},
            {name: "Belgium", id: "be"}, {name: "Brazil", id: "br"}, {name: "Canada", id: "ca"}, { name: "China", id: "cn"
            }
        ]
    }

    render() {
        return (
            <div className="inline-flex w-full py-5 px-32 items-center" id="filterHeader" style={{'backgroundColor': '#27282c'}}>
                <div className="mx-auto">
                    <span className="mx-4 text-xl" style={{'color': '#a8a9aa'}}>Categories: </span>
                    <select name="category" id="selCategory"
                            className="bg-gray-300 border-2 rounded-lg border-0 pl-2 pr-5 py-1">
                        {
                            this.state.categories.map((category) => {
                                return (
                                    <option value="">{category}</option>
                                )
                            })}
                    </select>
                    <span className="mx-4 text-xl" style={{'color': '#a8a9aa'}}>Country: </span>
                    <select name="category" id="selCountry"
                            className="text-gray-700 rounded-lg border-0 pl-2 pr-5 py-1">
                        {
                            this.state.countries.map((country) => {
                                return (
                                    <option value="">{country.name}</option>
                                )
                            })}
                    </select>
                    <button onClick={this.filterCategory}
                            className="px-6 rounded-full focus:outline-none border-2 border-gray-600 py-1 mx-4 text-xl font-semibold bg-black"
                            style={{'color': '#a8a9aa'}}>
                        Search
                    </button>
                </div>
            </div>
        )
    }
}

export default Filters;