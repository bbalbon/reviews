import React from "react";
var moment = require("moment");
moment().format();

const Review = ({ review }) => {
  let score;
  let stayDate = moment(review.stayDate).fromNow();
  let postDate = moment(review.postDate).fromNow();
  if (review.reviewScore === 5) {
    score = <img src="https://i.ibb.co/BymJ45t/five-star.png"></img>;
  }
  if (review.reviewScore === 4) {
    score = <img src="https://i.ibb.co/FB6n4rG/four-star.png"></img>;
  }
  if (review.reviewScore === 3) {
    score = <img src="https://i.ibb.co/dpJdg0v/three-star.png"></img>;
  }
  if (review.reviewScore === 2) {
    score = <img src="https://i.ibb.co/d2Q3ZXk/two-star.png"></img>;
  }
  if (review.reviewScore === 1) {
    score = <img src="https://i.ibb.co/jDVXLrW/one-star.png"></img>;
  }

  return (
    <div className="review-wrapper">
      <div className="single-review-header">
        <div className="avatar">
          <img className="avatar-image" src={review.profileImage}></img>
        </div>
        <div className="user-info">
          <span className="username">{review.username}</span>
          <span className="review-date"> wrote a review {postDate}</span>
          <span>
            <img className="dots" src="https://i.ibb.co/zJ9YfLJ/dots.png"></img>
          </span>
        </div>

        <div className="user-info">
          <ul className="user-list">
            <li className="user-location">{review.userLocation}</li>
            <li>
              <span className="user-contribution">
                {review.numberOfContributions}
              </span>
              <span className="user-contribution-text">
                &nbsp;contributions
              </span>
            </li>
            <li>
              <span className="helpful-votes">{review.helpfulVotes}&nbsp;</span>
              <span className="helpful-votes-text">helpful votes</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="review-body">
        <div className="review-score">{score}</div>
        <div className="review-title">{review.reviewTitle}</div>
        <div className="review-text">{review.reviewText}</div>
        <div className="review-stay-data">
          <span className="date-of-stay">Date of stay: </span>
          <span className="stay-date">{stayDate}</span>
        </div>
        <div className="review-disclaimer">
          This review is the subjective opinion of a TripAdvisor member and not
          of TripAdvisor LLC.
        </div>
      </div>
      <div className="review-bottom">
        <span className="helpful">
          <img
            className="thumb-up"
            src="https://i.ibb.co/TqTq3v3/thumbup.png"
          ></img>
          <span className="helpful-text">Helpful</span>
        </span>
        <span className="share-info">
          <img className="share" src="https://i.ibb.co/g6zNsyX/share.png"></img>
          <span className="share-text">Share</span>
        </span>
      </div>
    </div>
  );
};

export default Review;
