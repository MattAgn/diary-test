/* eslint-disable react-native/no-inline-styles */
import { Camera, Check, X } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { useAtom } from "jotai";
import { Alert } from "react-native";
import { v6 as uuidv6 } from "uuid";

import { DiaryEntryForm } from "@/components/DiaryEntryForm";
import { IconButton } from "@/components/IconButton";
import { useDiaryEntryForm } from "@/hooks/useDiaryEntryForm";
import { diaryEntriesAtom } from "@/store/diaryEntriesAtom";

import { DiaryEntryModalLayout } from "../components/DiaryEntryModalLayout";

export default function NewDiaryEntry() {
  const [diaryEntries, setDiaryEntries] = useAtom(diaryEntriesAtom);
  const { formData, formActions } = useDiaryEntryForm();
  const createdAt = new Date();

  const isFormEmpty =
    formData.title.length === 0 &&
    formData.content.length === 0 &&
    formData.media === null;

  const handleSubmit = () => {
    if (isFormEmpty) {
      router.back();
      return;
    }

    setDiaryEntries([
      ...diaryEntries,
      {
        id: uuidv6(),
        createdAt,
        ...formData,
      },
    ]);
    router.back();
  };

  const handleCancel = () => {
    Alert.alert(
      "Cancel",
      "Are you sure you want to erase this entry? Your changes will not be saved.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => router.back() },
      ],
    );
  };

  const formattedDate = createdAt.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <DiaryEntryModalLayout
      title={formattedDate}
      mainContent={<DiaryEntryForm {...formActions} {...formData} />}
      bottomActions={
        <>
          <IconButton
            transparent
            onPress={formActions.pickImage}
            icon={Camera}
          />
          <IconButton transparent onPress={handleSubmit} icon={Check} />
          <IconButton transparent onPress={handleCancel} icon={X} />
        </>
      }
    />
  );
}
