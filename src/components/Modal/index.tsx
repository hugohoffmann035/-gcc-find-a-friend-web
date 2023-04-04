import React from 'react'
import ReactModal from 'react-modal'
import { MdClose } from 'react-icons/md'
import { Container, Header, ButtonClose, Title, Content } from './styles'

const sizeType = {
  small: '466px',
  normal: '45%',
  medium: '66%',
  large: '72%',
}

type SizeType = 'small' | 'normal' | 'medium' | 'large'

const SIZE_TYPE_DEFAULT: SizeType = 'small'

ReactModal.setAppElement('#root')

export function Modal({
  isOpen = false,
  onClose = () => {},
  onOpen = () => {},
  children = <></>,
  title = '',
  size = SIZE_TYPE_DEFAULT,
  onConfirm = () => {},
  btnConfirmLabel = '',
  btnCloseLabel = '',
  showBtnConfirm = true,
  showBtnClose = true,
  showBtnCloseX = true,
  minHeight = '',
  moreButtonElements = () => <></>,
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      parentSelector={() => document.querySelector('#root')}
      overlayClassName="modal-overlay"
      className="modal-content"
      style={{
        content: {
          minHeight,
          maxWidth: '90%',
          width:
            sizeType[size || SIZE_TYPE_DEFAULT] || sizeType[SIZE_TYPE_DEFAULT],
        },
      }}
    >
      <Container>
        <Header>
          <Title>{title}</Title>
          {showBtnCloseX && (
            <ButtonClose onClick={onClose}>
              <MdClose size={17} />
            </ButtonClose>
          )}
        </Header>
        <Content>{children}</Content>
      </Container>
    </ReactModal>
  )
}
