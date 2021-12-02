import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { queryState, restaurantDataState } from "../states";

export default function useSearchRestauarants() {
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  const query = useRecoilValue(queryState);
  const setRestaurantData = useSetRecoilState(restaurantDataState);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      
      try {
        const response = await axios({
          method: "post",
          url: "/api/posts",
          data: query
        });
        setRestaurantData(response.data);
        console.log(response.data);
        console.log(restaurantData);
      }
      catch (error) {
        setIsError(true);
        console.log(error);
      }
      finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [query]);

  return { isLoading, isError };
}