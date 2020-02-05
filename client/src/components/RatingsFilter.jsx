import React from "react";

class RatingsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleRatingFilterChange = this.handleRatingFilterChange.bind(this);
  }

  handleRatingFilterChange(e) {
    this.props.handleRatingFilterChange(parseInt(e.target.value));
  }

  render() {
    const totalNumberOfReviews = this.props.hotelReviewsData.length;
    const excellentReviews = [];
    const veryGoodReviews = [];
    const averageGoodReviews = [];
    const poorReviews = [];
    const terribleReviews = [];
    this.props.hotelReviewsData.forEach(review => {
      if (review.reviewScore === 5) {
        excellentReviews.push(review.reviewScore);
      } else if (review.reviewScore === 4) {
        veryGoodReviews.push(review.reviewScore);
      } else if (review.reviewScore === 3) {
        averageGoodReviews.push(review.reviewScore);
      } else if (review.reviewScore === 2) {
        poorReviews.push(review.reviewScore);
      } else if (review.reviewScore === 1) {
        terribleReviews.push(review.reviewScore);
      }
    });
    return (
      <div className="rating">
        <div className="filter-header">Traveler rating</div>
        <ul className="filter-table">
          <li className="checkbox">
            <label className="filter-container">
              <input
                className="excellent-checkbox"
                name="excellent"
                type="checkbox"
                value="5"
                checked={this.props.currentRatingFilters.has(5)}
                onChange={this.handleRatingFilterChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Excellent &nbsp;&nbsp;&nbsp;
              <span className="rownumber">
                <progress
                  className="progress"
                  value={excellentReviews.length}
                  max={totalNumberOfReviews}
                ></progress>
                &nbsp;&nbsp;&nbsp;{excellentReviews.length}
              </span>
            </label>
          </li>
          <li className="checkbox">
            <label className="filter-container">
              <input
                className="very-good-checkbox"
                name="very-good"
                type="checkbox"
                value="4"
                checked={this.props.currentRatingFilters.has(4)}
                onChange={this.handleRatingFilterChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Very Good&nbsp;
              <span className="rownumber">
                <progress
                  className="progress"
                  value={veryGoodReviews.length}
                  max={totalNumberOfReviews}
                ></progress>
                &nbsp;&nbsp;&nbsp;{veryGoodReviews.length}
              </span>
            </label>
          </li>
          <li className="checkbox">
            <label className="filter-container">
              <input
                className="average-checkbox"
                name="average"
                type="checkbox"
                value="3"
                checked={this.props.currentRatingFilters.has(3)}
                onChange={this.handleRatingFilterChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Average
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="rownumber">
                <progress
                  className="progress"
                  value={averageGoodReviews.length}
                  max={totalNumberOfReviews}
                ></progress>
                &nbsp;&nbsp;&nbsp;{averageGoodReviews.length}
              </span>
            </label>
          </li>
          <li className="checkbox">
            <label className="filter-container">
              <input
                className="poor-checkbox"
                name="poor"
                type="checkbox"
                value="2"
                checked={this.props.currentRatingFilters.has(2)}
                onChange={this.handleRatingFilterChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Poor
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="rownumber">
                <progress
                  className="progress"
                  value={poorReviews.length}
                  max={totalNumberOfReviews}
                ></progress>
                &nbsp;&nbsp;&nbsp;{poorReviews.length}
              </span>
            </label>
          </li>
          <li className="checkbox">
            <label className="filter-container">
              <input
                className="terrible-checkbox"
                name="terrible"
                type="checkbox"
                value="1"
                checked={this.props.currentRatingFilters.has(1)}
                onChange={this.handleRatingFilterChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terrible
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="rownumber">
                <progress
                  className="progress"
                  value={terribleReviews.length}
                  max={totalNumberOfReviews}
                ></progress>
                &nbsp;&nbsp;&nbsp;{terribleReviews.length}
              </span>
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default RatingsFilter;
