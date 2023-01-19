/* eslint-disable jsx-a11y/anchor-is-valid */

import "./index.scss";

import React from "react";

const FIXED_POINT = [
  {
    id: 1,
    name: "Nhà trai",
    location: "Sơn Trung, Hương Sơn, Hà Tĩnh, Việt Nam",
    latitude:  18.520807484801406,
    longitude: 105.4330503215852,
    code: "1",
    src: "images/points/point.png",
  },
  { 
    id: 2,
    name: "Nhà gái",
    location: "Vọng Giang, Mai Đình, Hiệp Hòa, Bắc Giang",
    latitude: 21.23062201049295,
    longitude: 105.9581780095903,
    code: "2",
    src: "images/points/point.png",
  },
];

const Map = () => {
  const mapEmbed = `
  <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1921272.826248652!2d104.46844599123696!3d19.861690441197716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3139bf97e9a598c5%3A0x1800009af6b20ff1!2zU8ahbiBUcnVuZywgSMawxqFuZyBTxqFuLCBIw6AgVMSpbmgsIFZp4buHdCBOYW0!3m2!1d18.5235154!2d105.43902539999999!4m5!1s0x3135053101fb817b%3A0x3a40eda3318fb08!2zNlhINSs3QzQgVuG7jW5nIEdpYW5nLCBNYWkgxJBpzIBuaCwgSGnDqsyjcCBIb8yAYSwgQsSDzIFjIEdpYW5nLCBW4buNbmcgR2lhbmcsIEhp4buHcCBIw7JhLCBC4bqvYyBHaWFuZywgVmnhu4d0IE5hbQ!3m2!1d21.2281303!2d105.9586325!5e0!3m2!1svi!2s!4v1674140380841!5m2!1svi!2s" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
