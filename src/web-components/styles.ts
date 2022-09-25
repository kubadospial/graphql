export const STYLES = `
:host {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    background-color: #000000;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rocket-container {
  display: flex;
  justify-content: center;
  color: #fff;
}

.rocket-wrapper {
  position: absolute;
  animation: rocket-wrapper;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  height: 5rem;
  width: 5rem;
}

.rocket {
  position: absolute;
  left: 8rem;
  height: 5rem;
  width: 5rem;
  animation: rocket;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}


@keyFrames rocket-wrapper {
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyFrames rocket {
  0% {
    transform: rotate(-45deg);
  }
  46% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-225deg);
  }
  96% {
    transform: rotate(-225deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}
`;
