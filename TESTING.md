# Code Validation

[Deep Scan](https://deepscan.io) validates my code on every change on Github, ensuring that the results are always up-to-date:

[![DeepScan grade](https://deepscan.io/api/teams/23376/projects/26637/branches/850426/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=23376&pid=26637&bid=850426)

# Unit Tests

## Unit tests for the Django Project

I wrote 16 unit tests for testing the django `models`, `serializers` and `views`. For the testing environment, I created a separate settings file: `settings_test.py`.

>To run the test in the development environment, run:

`python manage.py test --settings=rabbit_rescue_REST.settings_test`

Results:

![unit-tests-backend](testing-images/unit-tests-backend.jpeg)

## Unit tests for the React Project

> Coming soon. 

# End-to-end Integration Tests

> Coming soon.


# Accessibility tests

* Accessibility tests were carried out on a Chrome / MacOS browser-device combination:

    * Tabs are working as expected on all pages.
    * Screen reader works as expected on all pages, with one minor issue, detailed in the [Known Bugs](#known-bugs) section.
* Colour contrasts were checked using [a11y Contrast Checker](https://color.a11y.com/Contrast/). All pages passed the tests:
    * [About Page Contrast Check Result](testing-images/a11y-contrast-about.pdf)
    * [Adopt Page Contrast Check Result](testing-images/a11y-contrast-adopt.pdf)
    * [Contact Us Page Contrast Check Result](testing-images/a11y-contrast-adopt.pdf)
* Further accessibility tests were done with Chrome Dev Tool's Lighthouse testing, [please see below](#lighthouse-tests).

- - -



# Lighthouse tests

Performance, Accessibility, Best Practices and SEO tests were carried out with [Google Dev Tools](https://developer.chrome.com/docs/devtools/)' **Lighthouse** tool in `Incognito` mode. 

> This section is going to be updated to the latest results.

Results:

| Device | Page | Mode | Result | 
| :---: | :---: | :---: | :---: |
| Mobile | About | light mode | ![Result-about-light-mobile](testing-images/lighthouse-about-light-mode-mobile.jpeg)|
| Mobile | About | dark mode | ![Result-about-dark-mobile](testing-images/lighthouse-about-dark-mode-mobile.jpeg)|
| Desktop | About | light mode | ![Result-about-light-desktop](testing-images/lighthouse-about-light-mode-desktop.jpeg)|
| Desktop | About | dark mode | ![Result-about-dark-desktop](testing-images/lighthouse-about-dark-mode-desktop.jpeg)|
| Mobile | Adopt | light mode | ![Result-adopt-light-mobile](testing-images/lighthouse-adopt-light-mode-mobile.jpeg)|
| Mobile | Adopt | dark mode | ![Result-adopt-dark-mobile](testing-images/lighthouse-adopt-dark-mode-mobile.jpeg)|
| Desktop | Adopt | light mode | ![Result-adopt-light-desktop](testing-images/lighthouse-adopt-light-mode-desktop.jpeg)|
| Desktop | Adopt | dark mode | ![Result-adopt-dark-desktop](testing-images/lighthouse-about-dark-mode-desktop.jpeg)|
| Mobile | Contact Us | light mode | ![Result-contact-light-mobile](testing-images/lighthouse-contact-light-mode-mobile.jpeg)|
| Mobile | Contact Us | dark mode | ![Result-contact-dark-mobile](testing-images/lighthouse-contact-dark-mode-mobile.jpeg)|
| Desktop | Contact Us | light mode | ![Result-contact-light-desktop](testing-images/lighthouse-contact-light-mode-desktop.jpeg)|
| Desktop | Contact Us | dark mode | ![Result-contact-dark-desktop](testing-images/lighthouse-about-dark-mode-desktop.jpeg)|


- - -

# Bugs

## Resolved Bugs

* The screen reader could not convey meaning from some of the icons. 
    * Solution: aria-labels were added to all these icons' tags.
* Current page was wrongly identified by the sceen reader.
    * Solution: aria-current was corrected.
* Google Map's `<iframe>` was not changing colour in dark mode.
    * Solution: Properly customising the google maps iframe in dark mode would require an API_KEY which can not be safely embedded into HTML files, so dark-mode colours are achieved by just filtering the maps' colours in css. The `hue-rotate`, `invert` and `contrast` properties were set to achieve darker colours.

- - -
<br><br>

## Known Bugs

* When the screen reader is reading the `Adopt Page`'s main text, the reading stops before every highlighted text. I googled the issue, looked at local forums and asked advice on a specified slack channel, but found no solution. While this issue is an inconvenience, it does not block the availability of the content to the user.

