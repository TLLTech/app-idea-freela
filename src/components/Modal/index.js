import React from "react";
import { Modal } from "react-native";

import { Container } from "./styles";

export default function ModalFilter({ visible, children }) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <Container>{children}</Container>
    </Modal>
  );
}
