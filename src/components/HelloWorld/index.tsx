import { Heading } from "@chakra-ui/react";
import Header from "../Header";

interface HelloWorldProps {
    text: string
}

export default function HelloWorld({ text }: HelloWorldProps) {
    return (
        <Heading>{text}</Heading>
    )
}