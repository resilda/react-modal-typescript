//child component
import React, { useState } from 'react'
import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Register from '../../forms/Register'
import ContentContainer from './inputs/ContentContainer'
import { Wrapper1 } from '../styles/ModalContainer'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import CloseIcon from '@material-ui/icons/Close'
import ProgressBar from './steps/ProgressBar'

type Props = {
  setModalOpen: any
}

function ModalContent(component: Props) {
  const [index, setIndex] = useState<number>(0)

  function renderStep() {
    switch (index) {
      case 0:
        return (
          <Step1>
            <div className="animation-form">
              <div className="full-wrapper">
                <div className="buttons-wrapper">
                  <div
                    className="button"
                    onClick={(e) => {
                      e.preventDefault()
                      setIndex(index + 1)
                    }}
                  >
                    <NavigateNextIcon />
                  </div>
                  <div
                    className="button"
                    onClick={() => component.setModalOpen(false)}
                  >
                    <CloseIcon />
                  </div>
                </div>
                <ProgressBar />
                <h3 className="h3">+ Add New Record</h3>
              </div>
              <ContentContainer />
            </div>
          </Step1>
        )
      case 1:
        return (
          <Step2>
            <div className="animation-form">
              <div className="buttons-wrapper">
                <div
                  className="button"
                  onClick={(e) => {
                    e.preventDefault()
                    setIndex(index + 1)
                  }}
                >
                  <NavigateNextIcon />
                </div>
                <div
                  className="button"
                  onClick={() => component.setModalOpen(false)}
                >
                  <CloseIcon />
                </div>
              </div>
              <Register />
            </div>
          </Step2>
        )
      case 2:
        return (
          <Step3>
            <div className="animation-form">
              <div className="buttons-wrapper">
                <div
                  className="button"
                  onClick={() => component.setModalOpen(false)}
                >
                  <NavigateNextIcon />{' '}
                </div>
                <div
                  className="button"
                  onClick={() => component.setModalOpen(false)}
                >
                  <CloseIcon />
                </div>
              </div>
              <Register />
            </div>
          </Step3>
        )
      default:
        return <div />
    }
  }

  return <Wrapper1>{renderStep()}</Wrapper1>
}

export default ModalContent
