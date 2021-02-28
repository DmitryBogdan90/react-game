import React, { Component } from 'react';

import './Background.scss';

class Star {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;

    this.z = width;
    this.size = 0.6;
    this.radius = Math.random() * 1.2;
    this.speed = 0.2;
  }
}

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      canvas: {
        width: 1280,
        height: 720,
        centerX: 640,
        centerY: 360,
      },
      stars: [],
    };

    this.tick = this.tick.bind(this);
    this.animationID = null;
  }

  componentDidMount() {
    this.paint();
    this.setState({ stars: this.generateStars() });
    this.animationID = window.requestAnimationFrame(this.tick);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationID);
  }

  generateStars() {
    let stars = [];
    for (let i = 0; i < 66; i++) {
      stars[i] = new Star(this.state.canvas.width, this.state.canvas.height);
    }
    return stars;
  }

  paint() {
    if (this.props.isBackgroundOn) {
      const {
        canvas: { width, height, centerX, centerY },
        stars,
      } = this.state;
      let starsNext = stars;
      let context = this.refs.canvas.getContext('2d');
      context.fillStyle = 'black';
      context.fillRect(0, 0, this.state.canvas.width, this.state.canvas.height);

      for (let i = 0; i < starsNext.length; i++) {
        starsNext[i].z = starsNext[i].z - starsNext[i].speed;
        if (starsNext[i].z <= 0) {
          starsNext[i].z = width;
        }
        starsNext[i].x = (starsNext[i].x - centerX) * (width / starsNext[i].z);
        starsNext[i].x = starsNext[i].x + centerX;
        starsNext[i].y = (starsNext[i].y - centerY) * (width / starsNext[i].z);
        starsNext[i].y = starsNext[i].y + centerY;
        starsNext[i].size = starsNext[i].size * (width / starsNext[i].z);
        if (
          starsNext[i].x <= 0 ||
          starsNext[i].x > width ||
          starsNext[i].y <= 0 ||
          starsNext[i].y > height
        ) {
          starsNext[i] = new Star(width, height);
        }
        context.beginPath();
        context.arc(starsNext[i].x, starsNext[i].y, starsNext[i].size, 0, 360);
        context.fillStyle = 'white';
        context.fill();
      }
    } else {
      window.cancelAnimationFrame(this.animationID);
    }
  }

  tick() {
    this.paint();
    setTimeout(() => {
      this.animationID = window.requestAnimationFrame(() => this.tick());
    }, 10);
  }

  render() {
    const {
      canvas: { width, height },
    } = this.state;
    return <canvas className="background" ref="canvas" width={width} height={height} />;
  }
}

export default Background;
