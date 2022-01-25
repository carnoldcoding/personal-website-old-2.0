import travel from '../../../images/Traveling.jpg'
import covid from '../../../images/Covid.jpg'
import cc from '../../../images/CC.png'
import commerce from '../../../images/CommerceJS.jpg'

export const firstProject = {
    header: "COVID and Politics",
    subtitle: "The goal of this project is to determine if there is a correlation between an individual's political affiliation and risk of contracting COVID.",
    image: covid,
    link: "https://github.com/carnoldcoding/Covid-and-Politics",
    contribution: "This research paper was developed using results from Machine Learning algorithms implemented in Python. The data was gathered from the CDC, the Census, and cleaned utilizing SQL."
}

export const secondProject = {
    header: "Travel Tracker",
    subtitle: "The goal of this project is to allow avid travelers to log their journeys.",
    image: travel,
    link: "https://github.com/kcallaghan1/traveltracker",
    contribution: "This project was developed as a command-line program in Java. Data is stored in an SQL database that utilizes the JDBC library. Users can create accounts, create travel logs with images and descriptions, request additional locations to be added, and more."
}

export const thirdProject = {
    header: "Personal Website",
    subtitle: "The goal of this project was to teach myself React, while building a portfolio website for my resume.",
    image: cc,
    link: "https://flamboyant-hawking-caa2c5.netlify.app/",
    contribution: "This is my first website written purely in React. I utilized Styled-Components, React-Router, React-Scroll and the AOS React library."
}

export const fourthProject = {
    header: "eCommerce Site",
    subtitle: "The goal of this project was to familiarize myself with the CommerceJS API, along with developing dynamic websites in React.",
    image: commerce,
    link: "https://github.com/carnoldcoding/eCommerce-Website",
    contribution: "This site allows users to select items from a catalogue, enter their shipping/billing information, and fulfill a transaction. The transaction is done with the Stripe API, and the shop is done through CommerceJS API."
}