# Noa Technologies | Code challenge for frontend engineers (React.ts)
This is a brief evaluation task to assess level of applicants to Noa Technologies frontend engineering positions.

## Our goals
We would like to evaluate your general React coding skills, along with other skills that could prove very useful to us.
* typescript fluency
* code organisation and tidyness
* geolocation and geographical applications context comprehension
* basic external library/api documentation comprehension
* UI design skills when UI design support is not available

## The task
Modify the existing app to match the following criteria.
* App uses these data
  * user ip using [ipify API](https://api.ipify.org/)
  * ip location and stats using [ipinfo geo API](https://ipinfo.io/)
  * user location from browser using [geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
* App has 2 pages, uses react router for navigation, with a simple nav placed in a fixed position above the page and always visible
  * fullscreen map
    * uses [react-leaflet](https://react-leaflet.js.org/)
    * shows marker with current user location
    * shows marker with user ip location
    * shows a line between the two with a distance annotation
  * ip stats
    * shows user location coordinates and gps accuracy
    * shows user ip data collected from ipinfo
* App should build correctly for production

### Constraints
You should be able to follow this general rules.
* Don't intall any external package, everything you need should already be here. If you think that's really mandatory, comment the stuff explaining your decision
  * NEW: "react-router-dom" was not installed as part of the packages, I installed it for routing to work perfectly
* Avoid using classes
* Data from web api should be fetched just once when page loads
* Only one user location subscriber should be active at any time
* App should be responsive to every screen size/shape

### Estimated time for completion
This depends on your base skill, probably anything between 1 and 3 hours.

## Submission
Fork the repo, create a PR and ask a review.
