---
title: Docker 入门
date: 2019-8-8
tags:
 - docker
categories:
 - Server
 - Cloud
---

## Docker Usage

### MySql

参考文献: [docker 绿皮书](http://docs.nigeerhuo.com/docker/)

使用 Docker 一步搞定 MySql 的安装：

```bash
docker run -p 3306:3306 --name mysql-dokcer -e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest
```

上述命令的字段含义是：

1. `-p 3306:3306`：将运行容器内部的 3306 端口桥接到宿主机的 3306 端口。左边的属于宿主机，右边的属于容器。
2. `-e MYSQL_ROOT_PASSWORD=123456`：设置容器使用的环境变量。`MYSQL_ROOT_PASSWORD=123456` 指定了mysql server的密码是123456. (默认用户名是root)。
3. `-d`：后台运行容器。

### MongoDB

```bash
docker run --name mongo-docker -d -p 27077:27017 mongo:latest
```

此时可以用连接工具 [https://studio3t.com/](https://studio3t.com/) 测试并连接到 27077 端口。


### Jenkins

```bash
docker run -d -p 18088:8080 --name jenkins-docker -p 50000:50000 jenkins/jenkins:lts
```

需要注意的是，Jenkins 会使用两个端口映射到宿主机上面，向外暴露的是 8080 服务，我们在本地只需要连接 18088 端口即可。

连接到 localhost:18088 后，会提示配置密码，需要进入容器查看密码。

容器启动以后，需要进入容器对 Jenkins 进行简单的配置：

1. 进入容器

    ```bash
    docker exec -it jenkins-docker bash
    ```


2. 查看密码文件内容

    ```bash
    tail -f /var/jenkins_home/secrets/initialAdminPassword
    ```

    此时会得到类似于 `13e19c5410b145e59dbf70916ed4a3fb` 这样的输出，输入到浏览器端，即可进入。此时会自动安装一些插件，等待插件安装完成，然后设置账号密码，配置完成。

### Tomcat

指定 Tomcat 版本进行安装：

```bash
docker run --name tomcat-docker-8.0 -d  -p 9999:8080 tomcat:8.0
```

安装完成之后，想要把本地的文件拷贝到容器中：

```bash
docker cp ./.  tomcat-docker-8.0:/home
# 或者拷贝 war
docker cp foo.war tomcat-docker-8.0:/foo.war
```


## Installation

1. Follow the [tutorial](https://docs.docker.com/install/linux/docker-ce/ubuntu/#os-requirements)

2. Test whether the Docker is installed correctly (Ubuntu 16.04)

    ```bash
    sudo docker container run hello-world

    docker --version

    sudo docker info

    sudo docker image ls (-all)
    ```

3. List the versions available in your repo:

    ```bash
    apt-cache madison docker-ce
    ```

## Containers

Make sure all is set up:

```bash
docker run hello-world
```

Run the app, before this, a `Dockerfile` should be created:

```bash
sudo docker run -p 4000:80 friendlyhello

sudo docker run -d -p 4000:80 friendlyhello
# run on background
```

将 Docker 的 80 端口映射出去至 4000 端口，如果是在后台运行的话，可查看：

```bash
sudo docker container ls

#stop
sudo docker container stop 1fa4a...
```

## Share images

1. Login

2. Tag the image

3. Push the image

4. Pull

```bash
sudo docker login

sudo docker tag friendlyhello weigaochen/get-started:part2
# docker tag image username/respository:tag

sudo docker image ls
sudo docker push weigaochen/get-started:part2

sudo docker run -p 4000:801 weigaochen/get-started:part2
```

## Services

- 通过 `docker-compose.yml` 来配置，在其中引用已经 Published 的 image
    > A `docker-compose.yml` file is a YAML file that defines how Docker containers should behave in production.

- Run the new load-balanced app

    ```bash
    sudo docker swarm init
    sudo docker stack deploy -c docker-compose.yml getstartedlab
    ```

    注意到其中的 `getstartedlab` 是我们给 app 起的一个名字

- 查看：`sudo docker service ls`

    注意到 `NAME` 属性的值为 `getstartedlab_web`.

### Task

> A single container running in a service is called a task.

Let us list the **task**:

```bash
sudo service ps getstartedlab_web
```

如果顺利的话，这时候可以看到 5 个 task: `getstartedlab_web.1` 至 `getstartedlab_web.5`, 原因是我们在  `docker-compose.yml` 文件中配置了 5 个 `replices`.

## Swarms

**KEYWORDS**: swarm manager, workers, swarm clusters
