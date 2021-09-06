import { ProgressBarContainer } from '../../styles/ProgressBarContainer'

function ProgressBar() {
  const dotContainer = (
    <ProgressBarContainer>
      <div className="progress-bar-dots" />
    </ProgressBarContainer>
  )
  const dotCompletedContainer = (
    <ProgressBarContainer>
      <div className="completed-dots" />
    </ProgressBarContainer>
  )

  function dotsGenerater(contentWidth, fieldPercentage) {
    const dotList: any[] = []
    const dotWidth = 3
    const dotsCount = contentWidth / dotWidth
    const completedDots = dotsCount * fieldPercentage
    for (let i = 1; i < dotsCount; i++) {
      if (i < completedDots) {
        dotList.push(dotCompletedContainer)
      } else {
        dotList.push(dotContainer)
      }
    }
    return dotList
  }

  const partialContentWidth = (360 - 20) / 2

  return (
    <ProgressBarContainer>
      <div className="progress-bar-dots-wrapper">{dotsGenerater(30, 1)}</div>
      <div className="step-contianer">1</div>
      <div className="progress-bar-dots-wrapper">
        {dotsGenerater(partialContentWidth, 0.5)}
      </div>
      <div className="step-contianer">2</div>
      <div className="progress-bar-dots-wrapper">
        {dotsGenerater(partialContentWidth, 0.5)}
      </div>
      <div className="step-contianer">3</div>
      <div className="progress-bar-dots-wrapper">{dotsGenerater(30, 0.5)}</div>
    </ProgressBarContainer>
  )
}

export default ProgressBar
