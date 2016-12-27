# Production Glance

This application was created as a capstone project for Coursera & UCSD's Interaction Design specialization. [I wrote an article on my design process](https://medium.com/@JeffAndolora/creating-solution-centric-interfaces-cb83d26a2b97#.ic3met4ib).

I hope to use this project as an evolving showcase of simple React+Redux code samples and a place to experiment with new frontend or full-stack practices.

## Development Setup

The project should work as-is on any web server. In the future, `yarn start` should start a development webserver

```
yarn        # Installs dependencies
yarn start  # Instructs gulp to watch the filesystem, run eslint, and produce webpack builds on save
```

## TODO List

* Inprove NPM / Gulp setup to run a development webserver
* Unit testing & CI
* Configure for use in a production environment (Optimized/minified assets, etc.)
* Un-stub the query system and use Wit.ai for NLP
* Create a sister IOT project that exposes APIs to un-stub the query result data
