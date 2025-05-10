# Description

This example aims to show a basic example on *how to integrate the map library
"leaflet"* along with some basic functionality like markers.

Additionally, since we will be using React, we will add a second
*library called "react-leaflet"*, which simply wraps "leaflet" extending its
functionality to expose it as React components.

These libraries are "unrelated"in the sense that are develop by different people

There is a third dependency that we will be using for Typescript support: "@types/leaflet"

# Docs

- [Leaflet tutorials](https://leafletjs.com/examples.html)
- [Leaflet docs](https://leafletjs.com/reference.html)


- [React Leaflet installation](https://react-leaflet.js.org/docs/start-introduction/)
- [React Leaflet examples](https://react-leaflet.js.org/docs/example-popup-marker/)

# Notes

A couple of notes I want to mention regarding these libraries:
- The "hot-reloading" features seems to not work pretty well with it, so sometimes
  you should do a manual reload of the page when making changes related to the maps.
- When you make the setup of the project don't forget to add the .css import in the
  component that will integrate a map: `import 'leaflet/dist/leaflet.css';`

# How to...

Run the development web server at `localhost:5173`:
```
npm run dev
```

You can build the web app with:
```
npm run build
```
