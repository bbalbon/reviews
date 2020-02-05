import React from "react";

class TravelerTypeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleTravalersTypeFilterChange(e.target.value);
  }

  render() {
    return (
      <div className="traveler-type">
        <div className="filter-header">Traveler type</div>
        <ul className="filter-table">
          <li className="checkbox">
            <label className="filter-container ">
              <input
                className="families-checkbox"
                name="families"
                type="checkbox"
                value="Families"
                checked={this.props.currentTravelerTypeFilters.has("Families")}
                onChange={this.handleChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Families&nbsp;&nbsp;&nbsp;
            </label>
          </li>
          <li className="checkbox">
            <label className="filter-container ">
              <input
                className="couples-checkbox"
                name="couples"
                type="checkbox"
                value="Couples"
                checked={this.props.currentTravelerTypeFilters.has("Couples")}
                onChange={this.handleChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Couples&nbsp;&nbsp;&nbsp;
            </label>
          </li>
          <li className="checkbox">
            <label className="filter-container ">
              <input
                className="solo-checkbox"
                name="solo"
                type="checkbox"
                value="Solo"
                checked={this.props.currentTravelerTypeFilters.has("Solo")}
                onChange={this.handleChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Solo&nbsp;&nbsp;&nbsp;
            </label>
          </li>
          <li className="checkbox">
            <label className="filter-container ">
              <input
                className="business-checkbox"
                name="business"
                type="checkbox"
                value="Business"
                checked={this.props.currentTravelerTypeFilters.has("Business")}
                onChange={this.handleChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Business&nbsp;&nbsp;&nbsp;
            </label>
          </li>
          <li className="checkbox">
            <label className="filter-container ">
              <input
                className="friends-checkbox"
                name="friends"
                type="checkbox"
                value="Friends"
                checked={this.props.currentTravelerTypeFilters.has("Friends")}
                onChange={this.handleChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Friends&nbsp;&nbsp;&nbsp;
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default TravelerTypeFilter;
