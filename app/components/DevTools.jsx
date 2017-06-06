import React from 'react';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import ChartMonitor  from 'redux-devtools-chart-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';

export default createDevTools(
  <DockMonitor defaultIsVisible={true} toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
      <ChartMonitor />
  </DockMonitor>
);

/* <SliderMonitor keyboardEnabled /> */
/* <LogMonitor theme="tomorrow" /> */
/* <ChartMonitor /> */