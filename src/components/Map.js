/*global kakao*/

import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
export default function Map() {
  const { kakao } = window;
  useEffect(() => {
    
    kakao.maps.load(() => {
      var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 2
      };  
     
        var map = new kakao.maps.Map(mapContainer, mapOption); 
        var geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch('서울 마포구 신촌로12다길 20', function(result, status) {
        
            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {
        
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        
                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                marker.setMap(map);
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        }); 
    });
  });

  return <Box id={"map"} w="25rem" h="25rem"></Box>;
}
