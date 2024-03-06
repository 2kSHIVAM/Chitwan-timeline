import mixpanel, { Dict } from 'mixpanel-browser';

let mixpanelInit = false
export const initMixpanel = () => {
  if(process.env.REACT_APP_MIXPANEL_TOKEN && fetchEnv() === "production"){
    mixpanelInit = true
    mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN,{track_pageview: true})
  }
}

const fetchEnv = () => {
  if(process.env.NODE_ENV === "production") return "production"
  return "testing"
}

export const trackEvent = (name:string,properties:Dict) => {
  if(mixpanelInit)
    mixpanel.track(name,{
      env: fetchEnv(),
      ...properties
    })
}