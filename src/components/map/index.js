/* eslint-disable jsx-a11y/anchor-is-valid */

import "./index.scss";

import React from "react";

const FIXED_POINT = [
  {
    id: 1,
    name: "Nhà trai",
    location: "Yên Tập - Nhân Hòa - Mỹ Hào - Hưng Yên",
    latitude: 20.951629,
    longitude: 106.058693,
    code: "1",
    src: "images/points/point.png",
  },
  { 
    id: 2,
    name: "Nhà gái",
    location: "Thanh Uyên - Tam Nông - Phú Thọ",
    latitude: 21.347704809509374,
    longitude: 105.25173698146904,
    code: "2",
    src: "images/points/point.png",
  },
];
const Map = () => {
  const mapEmbed = `
  <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d476197.22817045683!2d105.3390012839926!3d21.18060210788664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3135a479723df9f7%3A0x8144812ad46d49dd!2zWcOqbiBU4bqtcCwgTmjDom4gSMOyYSwgTeG7uSBIw6BvLCBIxrBuZyBZw6pu!3m2!1d20.949165999999998!2d106.0588744!4m5!1s0x31349024b24d106d%3A0xcfa119b268454ee6!2zVGhhbmggVXnDqm4sIFRhbSBOw7RuZywgUGjDuiBUaOG7jSwgVmnhu4d0IE5hbQ!3m2!1d21.3481421!2d105.24873699999999!5e0!3m2!1svi!2s!4v1697477051354!5m2!1svi!2s" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
  return (
    <div>
      <div className="map-box">
        <div dangerouslySetInnerHTML={{ __html: mapEmbed }}></div>
        <div>
          {FIXED_POINT.map((point, index) => (
            <p key={index}>
              <div className="point-box">
                <div className="marker-circle">
                  <img src={point.src} alt={point.code} /> &nbsp;
                  <a
                    href={`http://maps.google.com/maps?daddr=${point.latitude},${point.longitude}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {point.name}
                  </a>{" "}
                  :<span>{point.location}</span>
                  <br />
                </div>
              </div>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default React.memo(Map);
