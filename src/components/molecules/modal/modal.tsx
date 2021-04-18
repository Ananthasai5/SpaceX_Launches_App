import React from "react";
import classNames from "classnames";
import { Modal as BootstrapModal } from "react-bootstrap";

interface IProps {
  modalBody: React.ReactElement;
  closeButton: boolean;
  isShow: boolean;
  onHide: Function;
  title?: string;
  wrapperClassName?: string;
  dialogClassName?: string;
  modalFooter?: React.ReactElement;
  size?: "sm" | "lg" | "xl";
  isCentered?: boolean;
  backdrop?: "static" | true | false;
  modalFooterClassName?: string;
  modalHeaderClassName?: string;
  modalBodyClassName?: string;
  scrollable?: boolean;
}
export default function Modal(props: IProps) {
  const {
    modalHeaderClassName = "",
    modalBody,
    modalBodyClassName = "",
    modalFooter,
    modalFooterClassName = "",
    title = "",
    closeButton,
    wrapperClassName = "",
    dialogClassName = "",
    isShow,
    onHide = null,
    size,
    isCentered = true,
    backdrop,
    scrollable
  } = props;

  const modalClassNames = {
    wrapperClass: classNames("wrapper-classes-go-here", wrapperClassName),
    dialogClass: classNames("dialog-classes-go-here", dialogClassName),
    footerClass: classNames("modal-footer", modalFooterClassName),
    headerClass: classNames("modal-header", modalHeaderClassName),
    bodyClass: classNames("modal-body", modalBodyClassName)
  };

  return (
    <div className={modalClassNames.wrapperClass}>
      <BootstrapModal
        show={isShow}
        onHide={() => onHide()}
        dialogClassName={modalClassNames.dialogClass}
        aria-labelledby="example-custom-modal-styling-title"
        size={size}
        centered={isCentered}
        backdrop={backdrop}
        scrollable={scrollable}
      >
        <BootstrapModal.Header className={modalClassNames.headerClass} closeButton={closeButton}>
          <BootstrapModal.Title id="contained-modal-title-lg">{title}</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body className={modalClassNames.bodyClass}>{modalBody}</BootstrapModal.Body>
        <BootstrapModal.Footer className={modalClassNames.footerClass}>{modalFooter}</BootstrapModal.Footer>
      </BootstrapModal>
    </div>
  );
}
