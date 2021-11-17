import { Text, HStack, Box, Button } from "@chakra-ui/react";

export default function FilterTypeBox({type, options}) {
    const stack = options.map((option, index) => {
        <Button variant="outline" key="index">
            {option}
        </Button>
    });

    return(
        <Box>
            <Text>{type}</Text>
            <HStack spacing="15px" shouldWrapChildren="true">
                {stack}
            </HStack>
        </Box>
    );
}