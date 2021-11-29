import {
  Flex,
  Button,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import FilterTypeBox from "./FilterTypeBox";
import { useState } from "react";

export default function Filter({ isOpen, onClose }) {
  const [selectedArea, setSelectedArea] = useState([]);
  const [selectedStage, setSelectedStage] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState();

  const updateFilters = () => {
    console.log({
      area: selectedArea,
      stage: selectedStage,
      type: selectedType,
    });

    setSelectedFilters({
      area: selectedArea,
      stage: selectedStage,
      type: selectedType,
      inputText: ""
    });
  };

  const clearFilter = () => {
    setSelectedArea([]);
    setSelectedStage([]);
    setSelectedType([]);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          clearFilter();
        }}
        size="xl"
        scrollBehavior="inside"
        colorScheme="Green"
      >
        <ModalOverlay />
        <ModalContent>
          <Flex>
            <ModalHeader flex="1">필터</ModalHeader>
            <Spacer />
            <ModalCloseButton />
          </Flex>
          <ModalBody>
            <FilterTypeBox
              type="area"
              options={seoulAreas}
              selected={selectedArea}
              setSelected={setSelectedArea}
            />
            <FilterTypeBox
              type="stage"
              options={vegetarianStages}
              selected={selectedStage}
              setSelected={setSelectedStage}
            />
            <FilterTypeBox
              type="type"
              options={restaurantTypes}
              selected={selectedType}
              setSelected={setSelectedType}
            />
            <ModalFooter>
              <Button
                variant="solid"
                size="lg"
                p="10px 15px"
                alignSelf="flex-end"
                onClick={() => {
                  onClose();
                  updateFilters();
                  clearFilter();
                }}
              >
                선택 완료
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

const seoulAreas = [
  "강서구",
  "양천구",
  "구로구",
  "금천구",
  "영등포구",
  "마포구",
  "은평구",
  "서대문구",
  "동작구",
  "관악구",
  "용산구",
  "서초구",
  "강남구",
  "송파구",
  "강동구",
  "중구",
  "종로구",
  "성북구",
  "강북구",
  "도봉구",
  "노원구",
  "중랑구",
  "동대문구",
  "성동구",
  "광진구",
];
const vegetarianStages = [
  "비건",
  "락토 베지테리언",
  "오보 베지테리언",
  "락토 오보 베지테리언",
  "페스코 베지테리언",
  "폴로 베지테리언",
  "플렉시테리언",
];
const restaurantTypes = [
  "한식",
  "분식",
  "카페",
  "베이커리",
  "양식",
  "술집",
  "인도/중동",
  "중식",
  "동남아",
  "일식",
];
