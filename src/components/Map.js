/*global kakao*/

import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
export default function Map() {
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
        
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                marker.setMap(map);
                map.setCenter(coords);
            } 
        }); 
    });
  });

  return <Box id={"map"} w="40rem" h="25rem"></Box>;
}
