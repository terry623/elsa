import PropTypes from 'prop-types';
import React from 'react';
import { Parallax } from 'react-spring';

import Header from './Header';

const BackgroundImage = '/static/background_image.jpg';

const Topic = ({ mainOffset, scroll }) => (
  <div onClick={() => scroll(1)}>
    <Parallax.Layer offset={mainOffset} speed={0}>
      <Header />
      <div className="back_layer" />
    </Parallax.Layer>
    <Parallax.Layer offset={mainOffset + 0.3} speed={0.5}>
      <div className="card">
        <div className="title_block">
          <div className="year_title">2017</div>
          <div className="main_title">Virtual-to-Real:</div>
          <div className="sub_title">
            Learning to Control in Visual Semantic
          </div>
          <div className="sub_title">Segmentation</div>
        </div>
      </div>
    </Parallax.Layer>
    {/* FIXME: 把 px 改成 rem */}
    <style jsx>{`
      // FIXME: 中間白色也變半透明了
      .card {
        width: 600px;
        height: 400px;
        margin-left: 45%;
        background-color: black;
        opacity: 0.5;
        border: 15px solid white;
        border-bottom-width: 150px;
        padding: 15px;
      }
      .title_block {
        padding: 0px 5px;
        font-size: 30px;
        color: white;
      }
      .year_title {
        margin-bottom: -10px;
      }
      .main_title {
        font-size: 50px;
        font-weight: bold;
      }
      .back_layer {
        background: url(${BackgroundImage});
        background-size: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -100;
      }
    `}</style>
  </div>
);

Topic.propTypes = {
  mainOffset: PropTypes.number.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default Topic;
