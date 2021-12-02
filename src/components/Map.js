import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
export default function Map() {
  useEffect(() => {
    kakao.maps.load(() => {
      // const container = document.getElementById("map"),
      //   options = {
      //     center: new kakao.maps.LatLng(37.566826, 126.9786567), // 위도, 경도 입력
      //     level: 3,
      //   };
      // const map = new kakao.maps.Map(container, options); // 지도그리기

      // var markerPosition = new kakao.maps.LatLng(37.566826, 126.9786567);
      // var marker = new kakao.maps.Marker({
      //   position: markerPosition,
      // });
      // marker.setMap(map);
      var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
      };  
  
        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 
        
        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();
        
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch('경기도 군포시 광정로 119', function(result, status) {
        
            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {
        
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        
                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
        
                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
                });
                infowindow.open(map, marker);
        
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        }); 
    });
  });

  return <Box id={"map"} w="600px" h="600px"></Box>;
}
