import { useState } from "react";

export default function useModalState(initialState: boolean) {
  const [isShow, setIsShow] = useState<boolean>(initialState);

  const hideModal = (): void => {
    setIsShow(false);
  };

  const showModal = (): void => {
    setIsShow(true);
  };

  return [isShow, showModal, hideModal] as const;
}
