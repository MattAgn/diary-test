/* eslint-disable react-native/no-inline-styles */
import type React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styled, XStack, YStack } from "tamagui";

import { JsStack } from "@/app/_layout";

import { ModalHeader } from "./ModalHeader";

export const BUTTONS_BOTTOM_BAR_HEIGHT = 85;

export function DiaryEntryModalLayout({
  title,
  mainContent,
  bottomActions,
}: DiaryEntryModalLayoutProps) {
  const header = () => <ModalHeader title={title} />;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 150 : 0}
    >
      <ContentContainer>
        <JsStack.Screen options={{ header }} />
        <KeyboardAwareScrollView
          enableOnAndroid
          enableResetScrollToCoords={false}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={Platform.OS === "ios" ? 55 : 0}
          // extraHeight={Platform.OS === "ios" ? 30 : 0}
          contentContainerStyle={{
            paddingHorizontal: 17,
            flexGrow: 1,
          }}
          style={{ flex: 1 }}
        >
          {mainContent}
        </KeyboardAwareScrollView>

        <BottomActionsBar>{bottomActions}</BottomActionsBar>
      </ContentContainer>
    </KeyboardAvoidingView>
  );
}

const ContentContainer = styled(YStack, {
  flex: 1,
  backgroundColor: "$background",
});

const BottomActionsBar = styled(XStack, {
  justifyContent: "space-around",
  backgroundColor: "$darkLightBackground",
  height: BUTTONS_BOTTOM_BAR_HEIGHT,
});

type DiaryEntryModalLayoutProps = {
  title: string;
  mainContent: React.ReactNode;
  bottomActions: React.ReactNode;
};
