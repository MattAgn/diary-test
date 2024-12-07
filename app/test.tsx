import { Plus } from "@tamagui/lucide-icons";
import { useState } from "react";
import { Text, XStack, YStack } from "tamagui";

import { IconButton } from "@/components/IconButton";

export default function Test() {
  const [text, setText] = useState("");
  return (
    <YStack flex={1} padding={"$8"} backgroundColor={"grey"}>
      <Text textAlign="center" fontSize={"$10"}>
        {text}
      </Text>
      <XStack marginTop={"$8"} justifyContent="center" alignItems="center">
        <IconButton icon={Plus} color="red" onPress={() => setText("AAAA")} />
        <IconButton icon={Plus} color="red" onPress={() => setText("BBBB")} />
        <IconButton icon={Plus} color="red" onPress={() => setText("CCCC")} />
      </XStack>
    </YStack>
  );
}
