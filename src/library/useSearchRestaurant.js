import { useEffect, useState } from "react";

export default function useSearchRestauarants() {
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);
  const [searchQuery, setSearchQuery] = useState({});

  // const [restaurantData, setRestaurantData] = useRecoilState(restaurantDataState);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      setIsError(false);
      
      // try {
      //   // const response = await axios({
      //   //   method: "post",
      //   //   url: "/api/posts",
      //   //   data: searchQuery
      //   // });
      //   // setRestaurantData(response.data);
      //   // setIsLoading(true);
      //   // console.log(response.data);
      //   // console.log(restaurantData);
      // }
      // catch (error) {
      //   setIsError(true);
      //   console.log(error);
      // }
      // finally {
      //   setIsLoading(false);
      // }
    };
    
    fetchData();
  }, [searchQuery]);

  return { isLoading, isError, searchQuery, setSearchQuery };
}