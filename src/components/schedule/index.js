import "./index.scss";
import React from "react";
const Schedule = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const location = urlParams.get("location") || "nha-trai";
  if (location === 'nha-trai') {
    return (
      <div>
        <div className="timeline">
          <div className="container right">
            <div className="content">
              <h2 className="dark:text-black">17h00 - 19h45 <div><small> 31/08/2022</small></div></h2>
              <p className="dark:text-black">Mời khách bữa cơm thân mật</p>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2 className="dark:text-black">20h00 - 21h00 <div><small> 31/08/2022</small></div></h2>
              <p className="dark:text-black">Tổ chức qua nhà gái quẩy</p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2 className="dark:text-black">21h00 - 24h00 <div><small> 31/08/2022</small></div></h2>
              <p className="dark:text-black">Chia tay lễ độc thân</p>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2 className="dark:text-black">08h00 - 10h00<div><small> 01/09/2022</small></div></h2>
              <p className="dark:text-black">Mời khách bữa cơm thân mật</p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2 className="dark:text-black">10h15 - 12h00 <div><small> 01/09/2022</small></div> </h2>
              <p className="dark:text-black">Tổ chức đón dâu</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="timeline">
          <div className="container right">
            <div className="content">
              <h2 className="dark:text-black">16h00 - 16h45 <div><small> 29/01/2023</small></div></h2>
              <p className="dark:text-black">📷 Chụp ảnh check in </p>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2 className="dark:text-black">17h00 - 19h45 <div><small> 29/01/2023</small></div></h2>
              <p className="dark:text-black">🍽️ Mời khách bữa cơm thân mật</p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2 className="dark:text-black">20h00 - 22h00 <div><small> 29/01/2023</small></div></h2>
              <p className="dark:text-black">💃 Quẩy tưng bừng tại nhà gái</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default React.memo(Schedule);
