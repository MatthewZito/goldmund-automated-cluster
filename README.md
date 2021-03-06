## goldmund.sh i
 
[![Build Status](https://travis-ci.org/MatthewZito/goldmund-automated-cluster.svg?branch=master)](https://travis-ci.org/MatthewZito/goldmund-automated-cluster)
```
Author: Matthew T Zito
License: MIT
```
## Table of Contents

 - [Introduction](#intro) 
    * [Packages](#packages)
 - [Documentation](#docs)
    * [Features](#features)
    * [Demos](#demo)

## <a name="intro"></a> Introduction

Goldmund.sh i is a small cohort of distributed microservices that drive a SEO and speed-optimized web application.

This project has been closed (I don't enjoy paying for expensive k8s resources). Please see the documentation for media of this project.

### <a name="packages"></a> Packages

 - [`goldmund-api`](https://github.com/MatthewZito/goldmund-automated-cluster/tree/master/packages/goldmund-api) - Persistent data processing service and REST API
 - [`goldmund-client`](https://github.com/MatthewZito/goldmund-automated-cluster/tree/master/packages/goldmund-client) - Next.js isomorphic server for generating hybrid SSG/SSR React App at runtime
 - [`goldmund-cli`](https://github.com/MatthewZito/goldmund-automated-cluster/tree/master/packages/goldmund-cli) - Command-line utility for managing sessions, `goldmund-api` database content, and CDN uploads/eager transformations
 - [`goldmund-server`](https://github.com/MatthewZito/goldmund-automated-cluster/tree/master/packages/goldmund-server) - Ingress and load balancer

## <a name="docs"></a> Documentation

### <a name="features"> Features
  - Distributed micro-service atchitecture coordinated with Kubernetes and Helm
  - Local development streamlined with Skaffold
  - Fully automated testing, auditing, builds, and production deployments via a single webhook
  - Custom Nginx-Ingress Controller and Issuer daemon automates TLS certificate renewal and executes infra / CSR challenges
  - Hardened security profile including HTTPs, Role-Based Access Control (RBAC), Cluster-wide security policies, rotational logging, and sanitization / validation middleware
  - Custom [Lambda architecture](https://en.wikipedia.org/wiki/Lambda_architecture) database layer supported by a portable Redis caching layer
  - RESTful microservice and API for serving and normalizing data, batch processing (`goldmund-api`)
  - Hybrid statically generated (SSG) / server-side rendered (SSR) frontend (`goldmund-client`) utilizes code-splitting, lazy loading, and dynamic imports for performance optimization
  - Command-line utility for localized sessions, database, and CDN management  (`goldmund-cli`) 
  - Custom middlewares. There are some esoteric and interesting HTTP Headers here - see if you can find them!

### <a name="demo"> Demos, Visualizations, and Abstractions

<!-- Preliminary Architectural Layout:
![demo](https://github.com/MatthewZito/goldmund-automated-cluster/blob/master/documentation/preliminary-architecture.png)
 -->

Goldmund.sh Architecture High-level Design:
<br>
![demo](https://github.com/MatthewZito/goldmund-automated-cluster/blob/master/documentation/architecture-hld.jpg)

  [Watch the usage demo of `goldmund-cli`, basic commands](https://streamable.com/n2jqqc)
  <br>
  [Watch the usage demo of `goldmund-cli`, advanced commands](https://streamable.com/atzsma)

Local development is greatly aided by Skaffold. In order to run local dev instance:
1. Register ledger secret object 
2. `skaffold dev`

To deploy:
Merge into branch Master with deployment trigger *i.e. the commit message keyword*

More information:
  - [Testing and Auditing](https://github.com/MatthewZito/goldmund-automated-cluster/blob/master/documentation/testing-and-auditing.md)
  - [Micro Batch-Processor](https://github.com/MatthewZito/goldmund-automated-cluster/blob/master/documentation/batch-processing.md)
  - [Isomorphic Kubernetes](https://github.com/MatthewZito/goldmund-automated-cluster/blob/master/documentation/goldmund-client.md)
  - [Goldmund CLI](https://github.com/MatthewZito/goldmund-automated-cluster/blob/master/packages/goldmund-cli/README.md)
  - [Goldmund Server](https://github.com/MatthewZito/goldmund-automated-cluster/blob/master/documentation/goldmund-server.md)
  - [More documentation](https://github.com/MatthewZito/goldmund-automated-cluster/tree/master/documentation)
