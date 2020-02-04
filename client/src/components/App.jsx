import React from "react";
import ReviewsView from "./ReviewsView.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "reviews",
      reviews: [],
      totalNumberOfReviews: ""
    };
    this.setTotalNumberOfReviews = this.setTotalNumberOfReviews.bind(this);
  }
  changeView(option) {
    this.setState({
      view: option
    });
  }

  setTotalNumberOfReviews(numberOfReviews) {
    this.setState({ totalNumberOfReviews: numberOfReviews });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="nav">
          <div
            className={
              this.state.view === "reviews" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("reviews")}
          >
            <div className="tab-icon">
              <img
                className="nav-icon"
                src="https://i.ibb.co/YZSgn2t/pen-and-paper.png"
              ></img>
            </div>
            <div className="tab-name">
              <div> {this.state.totalNumberOfReviews}</div>
              <div>Reviews</div>
            </div>
          </div>
          <div
            className={
              this.state.view === "q&a" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("q&a")}
          >
            <div className="tab-icon">
              <img
                className="nav-icon"
                src="https://i.ibb.co/CQ9HhLV/q-and-a.png"
              ></img>
            </div>
            <div className="tab-name">
              <div> {this.state.totalNumberOfReviews}</div>
              <div>Q+A</div>
            </div>
          </div>

          <div
            className={
              this.state.view === "room_tips"
                ? "nav-selected"
                : "nav-unselected"
            }
            onClick={() => this.changeView("room_tips")}
          >
            <div className="tab-icon">
              <img
                className="nav-icon"
                src="https://i.ibb.co/g6VxLWk/lightbolb.png"
              ></img>
            </div>
            <div className="tab-name">
              <div> {this.state.totalNumberOfReviews}</div>
              <div>Room tips</div>
            </div>
          </div>
        </div>
        <div className="main">
          {this.state.view === "reviews" ? (
            <ReviewsView
              setTotalNumberOfReviews={this.setTotalNumberOfReviews}
            />
          ) : (
            "IN PRODUCTION"
          )}
        </div>
      </div>
    );
  }
}

export default App;
