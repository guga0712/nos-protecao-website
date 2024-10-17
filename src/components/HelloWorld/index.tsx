import { Heading } from "@chakra-ui/react";

interface HelloWorldProps {
    text: string
}

export default function HelloWorld({ text }: HelloWorldProps) {
    return (
        <Heading>{text}</Heading>
    )
}