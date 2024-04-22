# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# what is react router
    -> A library for managing and navigating between different components and passing data bw the componenets in react but without re-loading the entire page or refreshing the entire page.
# what does it do
    -> As we know react is SPA, how to make SPA to multipage web application then we need to use react-router-dom
    -> Provides a way for handling routing and rendering differnt components for the different urls and it also maintain a clean and organized structure of the react application
# how to setup react ROuter
    -> need to install react router dom
        npm i react-router-dom
    -> just importing these rea t router components
    import {
        BrowserRouter as Router,
        Routes, 
        Route,
        Link, 
        Navlink, // which one is action which one is not
        Navigate, //for redirects
        Outlet, // for nested routes : within same page multiple routes are there
    }

    => BrowserRouter as Router : 
        - this is a  comp that provides the routing functionality for react application.
        - it listens the browser URL and render the component based on the route you defined.
    => Routes : 
        - it's a container that holds multiple <ROutes> elements.
    => Route :
        - To define what component should be rendered based on the different URLs.
    => Link:
        - a special componenet that acts as a placeholder for nested components.
    => NavLink
        - similar to Link component, but it provides you some active classes so you can put your css around it.
    => Navigate
        - for redirection on any component directly, so can you Navigate component.
    => Outlet
        - used for nesting of the routes.
        
