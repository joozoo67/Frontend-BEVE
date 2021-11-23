import React, { useState, useEffect } from "react";

export default function Map() {
  useEffect(() => {
    const container = document.getElementById("mask-map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div id="mask-map" style={{ height: "100%" }}>
      {" "}
    </div>
  );
}
