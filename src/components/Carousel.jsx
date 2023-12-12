import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              alt="animal thumbnail"
              className={index === active ? "active" : ""}
              onClick={(e) => {
                this.setState({ active: index });
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
