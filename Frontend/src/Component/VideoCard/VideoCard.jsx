// eslint-disable-next-line no-unused-vars
import React from "react";

export const VideoCard = (props) => {
  return (
    <div className="featured-video-container cursor-pointer">
        <div>      
            <video autoPlay loop muted controls={false} className="w-full h-full">
                <source
                src={props.url}
                type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
        <div>
              <p className="text-bold text-white">{props.title} <br />
                  <span className=" text-gray-400">{props.desc}</span>
              </p>
        </div>
    </div>
  );
};
