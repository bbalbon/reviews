import React from "react";

class TimeOfYearFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.checkFilter = this.checkFilter.bind(this);
  }

  handleChange(e) {
    var months = e.target.value.split(",").map(function(item) {
      return parseInt(item, 10);
    });
    this.props.handleTimeOfYearFilterChange(months);
  }

  checkFilter(months) {
    var exist = true;
    months.forEach(month => {
      if (!this.props.currentTimeOfYearFilters.has(month)) {
        exist = false;
      }
    });
    return exist;
  }

  render() {
    return (
      <div className="time-of-the-year">
        <div className="filter-header">Time of year</div>
        <ul className="filter-table">
          <li className="checkbox">
            <label className="filter-container">
              <input
                className="mar-may-checkbox"
                name="sep-nov"
                type="checkbox"
                value={[3, 4, 5]}
                checked={this.checkFilter([3, 4, 5])}
                onChange={this.handleChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mar-May&nbsp;&nbsp;&nbsp;
            </label>
          </li>
          <li className="checkbox">
            <label className="filter-container">
              <input
                className="jun-aug-checkbox"
                name="jun-aug"
                type="checkbox"
                value={[6, 7, 8]}
                checked={this.checkFilter([6, 7, 8])}
                onChange={this.handleChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jun-Aug&nbsp;&nbsp;&nbsp;
            </label>
          </li>
          <li className="checkbox">
            <label className="filter-container">
              <input
                className="sep-nov-checkbox"
                name="sep-nov"
                type="checkbox"
                value={[9, 10, 11]}
                checked={this.checkFilter([9, 10, 11])}
                onChange={this.handleChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sep-Nov&nbsp;&nbsp;&nbsp;
            </label>
          </li>
          <li className="checkbox">
            <label className="filter-container">
              <input
                className="dec-feb-checkbox"
                name="dec-feb"
                type="checkbox"
                value={[12, 1, 2]}
                checked={this.checkFilter([12, 1, 2])}
                onChange={this.handleChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dec-Feb&nbsp;&nbsp;&nbsp;
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default TimeOfYearFilter;
