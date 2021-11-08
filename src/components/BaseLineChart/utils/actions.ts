// eslint-disable-next-line @typescript-eslint/ban-types
export const setChart = (setChartValues: Function) => (chart: NBaseLineChart.ChartValues, cb?: Function) => {
  setChartValues(chart)
  if (cb) cb()
}

export const setDimensions =
  // eslint-disable-next-line @typescript-eslint/ban-types
  (setDimensionsValues: Function) => (dimensions: NBaseLineChart.Dimensions, cb?: Function) => {
    setDimensionsValues(dimensions)
    if (cb) cb()
  }

// eslint-disable-next-line @typescript-eslint/ban-types
export const setMouse = (setMouseValues: Function) => (mouse: NBaseLineChart.Mouse, cb?: Function) => {
  setMouseValues(mouse)
  if (cb) cb()
}
