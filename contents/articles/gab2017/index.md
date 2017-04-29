---
title: Global Azure Bootcamp 2017
author: kstreith 
date: 2017-04-29
template: article.html
---

I presented at [Raleigh-Durham Global Azure Bootcamp](https://www.meetup.com/TRINUG/events/237900403/) last weekend, April 22nd, 2017. I had a blast and the other presentations were great.   

My talk was on Azure Container Service. Azure Container Service can be broken down into three things:

 * Containers: packaged version of an application with all dependencies, commonly a [Docker](https://www.docker.com/) container.
 * Container Service: otherwise known as a container orchestrator. This is software that manages a cluster of machines and can spin up running instances of software from a container image. You get features like auto-scaling, self-healing, versioned deployments, rolling deployments. These features work for any software that can be packaged into a container.
 * Azure: normally getting started using an container orchestrator can be a bit painful since you have to have the cluster of machines, you have to install the software and configure the cluster. This is where [Azure Container Service](https://azure.microsoft.com/en-us/services/container-service/) comes in, you can run a single command using the Azure CLI 2.0 and create a cluster using one of three container orchestrators.

My presentation includes a sample ASP.NET Core application I wrote and packaged into a container on [Docker Hub](https://hub.docker.com/r/kstreith/acs-gab-demo/). Follow the presentation and create your own cluster and try out rolling deployments, self-healing, replication in your own Azure account or create a free trial Azure account.

* Slides: <a href="http://itsnull.com/presentations/acs/">View</a>

Have fun learning!