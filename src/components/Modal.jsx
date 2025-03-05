"use client";

import { Button } from "./Button";
import ReactModal from "react-modal";
import { useModal } from "../hooks/useModal";
import { IoMdClose } from "react-icons/io";

export const Modal = ({
  className,
  buttonTitle,
  buttonIcon,
  trigerButtonClass,
  triggerButtonVariant,
  trigerButtonJustifyContent,
  modalTitle = "",
  modalTitleClassName,
  modalDescription,
  children,
  show = null,
  contentLabel = "Modal",
  onShowCallback,
  onCloseCallback,
}) => {
  const { showModal, setShowModal, closeModal, customStyles } = useModal({
    show,
  });
  return (
    <>
      {(buttonTitle || buttonIcon) && (
        <Button
          type="button"
          size="modal"
          onClick={() => setShowModal(true)}
          variant={triggerButtonVariant ? triggerButtonVariant : "primary"}
          className={`flex items-center h-12 gap-1 text-lg ${trigerButtonClass}`}
          justifyContent={trigerButtonJustifyContent}
          aria-haspopup="true"
        >
          {buttonIcon}
          {buttonTitle}
        </Button>
      )}
      <ReactModal
        isOpen={showModal}
        onAfterOpen={() => onShowCallback?.()}
        onAfterClose={() => onCloseCallback?.()}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={contentLabel}
        className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear transition-all duration-150  modal"
        overlayClassName="fixed inset-0 w-full h-full bg-slate-800/50 z-50 cursor-pointer modal-overlay"
      >
        <div className="relative w-auto mx-auto cursor-default">
          {/*content*/}
          <div
            className={`border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none p-4 md:p-10 ${className} `}
          >
            {/*header*/}
            {(modalTitle || modalDescription) && (
              <div
                className={`flex items-center pb-3 rounded-t whitespace-normal ${modalTitleClassName}`}
              >
                <div>
                  {modalTitle && (
                    <h3
                      className={`text-xl font-semibold text-secondary-200 flex justify-center items-start flex-col gap-2`}
                    >
                      <span>{modalTitle}</span>
                    </h3>
                  )}
                  {modalDescription && (
                    <p className="mt-3 text-xs mr-10 text-gray-500">
                      {modalDescription}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-secondary-100 rounded-full p-2 text-sm fixed right-7 top-7"
                >
                  <IoMdClose className="text-secondary-200 w-[40px] h-[40px] p-2  rounded-full" />
                </button>
              </div>
            )}
            {/*body*/}
            <div className="relative pt-2  flex flex-wrap flex-col whitespace-normal overflow-y-auto max-h-[80vh]">
              {children}
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

Modal.displayName = "Modal";
