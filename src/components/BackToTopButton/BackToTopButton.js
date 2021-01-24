import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./BackToTopButton.css";

export default class BackToTopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  toggleVisibility() {
    window.pageYOffset > 300
      ? this.setState({
          is_visible: true,
        })
      : this.setState({
          is_visible: false,
        });
  }

  componentDidMount() {
    let scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div
        className="scrollTopButton"
        style={{ display: is_visible ? "block" : "none" }}
        onClick={() => this.scrollToTop()}
      >
        <FontAwesomeIcon className="scrollTopButton__icon" icon={faChevronUp} />
      </div>
    );
  }
}
